<template>
  <a-card>
    {{ msg }}
    <br>
    {{ obj }}
    <br>
    {{fullName}}
  </a-card>
</template>

<script setup lang="ts">
import {
  // 响应式: 核心
  ref, computed, reactive, readonly, watchEffect, watchPostEffect, watchSyncEffect, watch,
  // 响应式: 工具
  isRef, unref, toRef, toValue, toRefs, isProxy, isReactive, isReadonly,
  // 响应式: 进阶
  shallowRef, triggerRef, customRef, shallowReactive, shallowReadonly, toRaw, markRaw, effectScope,
  getCurrentScope, onScopeDispose,
  // 生命周期钩子
  onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount,
  onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated, onServerPrefetch,
  // 依赖注入
  provide, inject,

} from 'vue';

const msg = ref<string>('你好')
const num = ref<bigint>(BigInt(1234567890123456789));
console.log(num.value);

const obj = reactive({
  name: 'zs',
  address: {
    info: '北京市',
    asd: '朝阳区'
  }
})

const fullName = computed(() => {
  return obj.name + '~' + obj.address.info
}, )

const original = reactive({ count: 0 })
const copy = readonly(original)
//立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。
watchEffect(() => {
  // 用来做响应性追踪
  console.log(copy.count)
})
// 更改源属性会触发其依赖的侦听器
original.count++
// 更改该只读副本将会失败，并会得到一个警告  Cannot assign to 'count' because it is a read-only property
// copy.count++ // warning!


</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>