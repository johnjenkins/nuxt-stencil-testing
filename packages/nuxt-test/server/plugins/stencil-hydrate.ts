import { renderToString } from 'stencil-components/hydrate';

export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('render:response', async (response, { event: e }) => {
    const res = await renderToString(response.body, {
      // prettyHtml: true,
      serializeShadowRoot: true,
      removeHtmlComments: false,
    })

    // console.log('incoming html' + response.body)
    // console.log('rendered html' + res.html)
    response.body = res.html 
  })
})