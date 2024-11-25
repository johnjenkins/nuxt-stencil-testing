import { renderToString } from 'stencil-components/hydrate';

export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('render:response', async (response, { event: e }) => {
    const res = await renderToString(response.body, {
      // prettyHtml: true,
    })

    // console.log('incoming html' + response.body)
    // console.log('rendered html' + res.html)
    response.body = res.html 
  })
})