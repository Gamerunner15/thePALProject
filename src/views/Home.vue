<template>
  <div>
    <bigger-header />
    <the-body />
    <the-footer />
  </div>
</template>

<script>
import BiggerHeader from '@/components/BiggerHeader'
import TheBody from '@/components/TheBody'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'Home',
  components: {
    BiggerHeader,
    TheBody,
    TheFooter
  }
}
</script>
