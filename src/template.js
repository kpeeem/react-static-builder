const React = require('react');
const T = React.PropTypes;

const Html = ({
    title = 'Application',
    bundle = 'app.js',
    body = '',
    favicon = 'favicon.ico',
    stylesheet = 'style.css',
}) => (
    <html>
    <head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
        <meta name='viewport' content='width=800' />
        <title>{title}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0089b0"/>
        <meta name="apple-mobile-web-app-title" content="Andrew Zhe"/>
        <meta name="application-name" content="Andrew Zhe"/>
        <meta name="theme-color" content="#fcfcfc"/>

        {stylesheet ? <link rel='stylesheet' href={stylesheet}/> : null}
    </head>
    <body style={{display:'none'}}>
    <div id='root' dangerouslySetInnerHTML={{__html: body}}/>
    <script src={'/'+bundle}/>
    </body>
    </html>
);

Html.propTypes = {
    title: T.string,
    bundle: T.string,
    body: T.string,
    favicon: T.string,
    stylesheet: T.string,
};

module.exports = Html;
