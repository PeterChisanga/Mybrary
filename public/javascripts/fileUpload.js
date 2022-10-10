const rootStyles = window.getComputedStyle(document.createElement)

if (rootStyles.getPropertyValue('--book-cover-width-large') != null) {
    ready()
} else {
    document.getElementById('main-css')
        .addEventListener('load', ready)
}

function ready() {
    const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
    const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
    const coverHeight = coverWidth / coverAspectRatio
    FilePond.registerPlugin(
    | FilePondPluginImagePreview,
    | FilePondPluginImageResize,
    | FilePondPluginImageEncode,

    )


    FilePond.setOptions({
        stylePanelAspectRatio: 150 / 100,
        imageResizeTargetWidth: 100,
        imageResizeTargetHeight: 150
    })

    FilePond.parse(document.body);
}
