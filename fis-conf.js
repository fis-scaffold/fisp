fis.config.set('namespace', '${namespace}');

fis.config.set('project.index', ['*.{tpl, html}']);

fis.match('*.tpl', {
  useMap: true,
  preprocessor: fis.plugin('extlang', {
    type: 'smarty'
  })
});
