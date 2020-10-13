<template>
  <div>
    <bigger-header />
    <tag-content v-bind:tag="{tag}" />
    <the-footer />
  </div>
</template>

<script>
import BiggerHeader from '@/components/BiggerHeader'
import TagContent from '@/components/TagContent'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'Home',
  components: {
    BiggerHeader,
    TagContent,
    TheFooter
  }
}
</script>
