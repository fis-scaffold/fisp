fis.require('smarty')(fis);
fis.set('namespace', '${namespace }');

// default media is `dev`，
fis.media('dev').match('*', {
    useHash: false,
    optimizer: null
});
