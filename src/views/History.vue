<template>
  <v-layout wrap class="elevation-4">
    <top-bar
      v-model="search"
      title="История"
      :with-actions="false"
    >
      <template #beforeSearch>
        <v-select
          v-model="tableName"
          :items="models"
          label="Название сущности"
          class="mr-8 mt-4"
          item-value="Value"
          item-text="Text"
        />
      </template>
    </top-bar>

    <v-flex xs12>
      <v-data-table
        :server-items-length="totalItems"
        :footer-props="footerTableProps"
        :expanded.sync="expanded"
        :headers="headers"
        :loading="loading"
        :page.sync="page"
        :items="history"
        item-key="Date"
        show-expand
      >
        <template #expanded-item="{ item, headers }">
          <td :colspan="headers.length">
            <v-data-table
              :headers="expandHeaders"
              :items="item.values"
            />
          </td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
import TopBar from '@/components/base/TopBar';

const expandHeaders = [
  { value: 'columnName',  text: 'Свойство'        },
  { value: 'oldValue',    text: 'Старое значение' },
  { value: 'newValue',    text: 'Новое значение'  },
];

const headers = [
  { value: 'RusAction',   text: 'Действие'},
  // { value: 'TableName',   text: 'Сущность'},
  // { value: 'PrimaryKey',  text: 'Первичный ключ'},
  { value: 'Date',        text: 'Время'},
  { value: 'UserName',    text: 'Пользователь'},
];

export default {
  name: 'History',

  components: {
    TopBar,
  },

  created() {
    this.loadHistory();
    this.loadModels();
  },

  data: () => ({
    tableName: 'Estates',
    search: '',

    loading: false,
    expanded: [],
    timer: null,

    totalItems: 1,
    page: 1,

    expandHeaders,
    headers,
  }),
  
  computed: {
    history() {
      return this.$store.getters['types/getHistory']
        .map(history => {
          const columnNames = history.ColumnName
            ? JSON.parse(history.ColumnName)
            : [];
          const oldValues = history.OldValue
            ? JSON.parse(history.OldValue)
            : [];
          const newValues = history.NewValue
            ? JSON.parse(history.NewValue)
            : [];

          return {
            ...history,
            TableName: this.russTableName(history.TableName),
            RusAction: this.russAction(history.Action),
            Date: history.Date.replace('T', ' '),
            UserName: history.User.Email,
            values: columnNames.map((columnName, index) => ({
              oldValue: oldValues[index],
              newValue: newValues[index],
              columnName,
            })),
          };
        });
    },
    models() {
      return this.$store.getters['types/getModels'];
    },
  },

  methods: {
    async loadHistory() {
      this.loading = true;
      const { error, data } = await this.$store.dispatch('types/loadHistory', {
        tableName: this.tableName,
        page: this.page,
      });

      if (!error) {
        this.totalItems = data;
      }
      this.loading = false;
    },
    loadModels() {
      return this.$store.dispatch('types/loadModels')
    },

    searchInHistory() {
      clearTimeout(this.timer);
      this.timer = null;

      this.timer = setTimeout(this.loadHistory, 500);
    },

    russAction(action) {
      switch (action) {
        case 'Added':
          return 'Добавление';
        case 'Modified':
          return 'Изменение';
        case 'Deleted':
          return 'удаление';
      };
    },
    russTableName(tableName) {
      const table = this.models.find(m => m.Value === tableName);
      return table ? table.Text : '';
    }
  },

  watch: {
    search() {
      this.searchInHistory();
    },
  },
};
</script>
