<template>
  <div>
    <the-header />
    <landing />
    <the-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader'
import Landing from '@/components/Landing'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'Home',
  components: {
    TheHeader,
    Landing,
    TheFooter
  }
}
</script>
