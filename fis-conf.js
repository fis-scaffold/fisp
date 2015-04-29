fis.set('namespace', '${namespace}');

fis.set('project.files', ['*.{tpl, html}']);

fis.match('*.tpl', {
  useMap: true,
  preprocessor: fis.plugin('extlang', {
    type: 'smarty'
  })
});
