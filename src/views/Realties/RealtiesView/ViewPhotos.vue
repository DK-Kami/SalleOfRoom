<script>

import {
  VCarouselItem,
  VResponsive,
  VCarousel,
  VLayout,
  VIcon,
  VCard,
  VImg,
} from 'vuetify/lib';

export default {
  functional: true,

  props: {
    photos: Array,
  },

  render(h, context) {
    const { photos } = context.props;

    console.log(photos);

    return (
      <VCard color="#cacaca">
        {photos.length
          ? (
            <VCarousel>
              {photos.forEach((photo, index) => {
                <VCarouselItem key={'picture-' + index}>
                  <VImg src={photo} height="100%" />
                </VCarouselItem>
              })}
            </VCarousel>
          )
          : (
            <VLayout>
              <VResponsive aspect-ratio="2.7">
                <VLayout
                  class="display-2"
                  justify-center
                  align-center
                  fill-height
                >
                  Изображений нет
                  <VIcon>mdi-image-off-outline</VIcon>
                </VLayout>
              </VResponsive>
            </VLayout>
          )
        }
      </VCard>
    );
  },
};

</script>
