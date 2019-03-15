<template>
  <div class="index">
    <index-header></index-header>
  </div>
</template>

<script>
// @ is an alias to /src
import indexHeader from '@/components/indexHeader.vue'
import Pos from '@/components/Pos.vue'

export default {
  name: 'index',
  components: {
	  indexHeader,
  }
}
</script>
