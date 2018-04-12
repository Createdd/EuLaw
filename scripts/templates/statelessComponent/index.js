const path = require( 'path' );
const { renderTemplateFile } = require('template-file');
const writeFile = require( 'write' );
const argv = require( 'minimist' )( process.argv.slice(2) );

let data;
let templates;

if( argv.help || argv.name === undefined ) {
    if( argv.name === undefined ) {
        console.log( 'ERROR: no arguments defined' );
    }
    console.log( 'please specify a --name and optionally a --path (default is ./src/components)' );
} else {
    data = {
        name : argv.name || 'Component',
        nameLowercase : argv.name.toLowerCase() || 'component',
        path : ( argv.path || './src/components/' ).replace(/\/?$/, '/'),
    };

    templates = [
        {
            input : './Component.tsx.tmpl',
            output : `${ data.name }.tsx`,
        },
        {
            input : './Component.test.tsx.tmpl',
            output : `${ data.name }.test.tsx`,
        },
        {
            input : './styles.ts.tmpl',
            output : `styles.ts`,
        },
        {
            input : './types.ts.tmpl',
            output : `types.ts`,
        },
        {
            input : './index.ts.tmpl',
            output : 'index.ts',
        },
    ];

    renderTemplates();
}

async function renderTemplates() {
    for ( template of templates ) {
        await renderTemplateFile( path.join( __dirname, template.input ), data )
            .then( ( renderedString ) => {
                const fp = `${ data.path }${ data.name }/${ template.output }`;
                writeFile.promise( fp, renderedString )
                    .then( () => console.log( `created file ${ fp }` ) );
            } );
    }
}
