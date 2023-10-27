import Artalk from "artalk";

interface ArtalkConfig {
  site: string,
  server: string
}

export const artalkInit = ({
                             site, server
                           }: ArtalkConfig) => {
  new Artalk({
    el: '#vcomments',
    // pageKey:   `${location.pathname}`,
    // pageTitle: `${document.title}`,
    server: server,
    site: site
  })
}
