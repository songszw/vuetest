/**
 * Created by songs on 2017/4/21.
 */
module.exports={
    entry:'./main.js',

    output:{
        path:__dirname,
        filename:'build.js'
    },
    module:{
        loaders:[
            {test:/\.vue$/,loader:'vue'},
            {test:/\.js$/,loader:'babel',exclude:/node_modules/}
        ]
    },
    babel:{
        presets:['es2015'],
        plugins:['transform-runtime']
    }
};

