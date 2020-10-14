<template>
  <div>
    <bigger-header />
    <tag-content />
    <the-footer />
  </div>
</template>

<script>
import BiggerHeader from '@/components/BiggerHeader'
import TagContent from '@/components/TagContent'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'tag-content-page',
  components: {
    BiggerHeader,
    TagContent,
    TheFooter
  }
}
</script>
