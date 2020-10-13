<template>
  <div>
    <the-header />
    <content />
    <the-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader'
import Content from '@/components/Content'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'View',
  components: {
    TheHeader,
    Content,
    TheFooter
  }
}
</script>
