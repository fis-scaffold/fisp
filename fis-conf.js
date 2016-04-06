fis.require('smarty')(fis);

// 可选
// fis.set('namespace', 'your namespace');

// default media is `dev`，
fis.media('dev').match('*', {
    useHash: false,
    optimizer: null
});
