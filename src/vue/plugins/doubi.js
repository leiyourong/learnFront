export default function doubiPlugins (store) {
  store.subscribe((mutation, state) => {
    console.log('小伙子，你修改了state。注意点哦！')
  })
}
