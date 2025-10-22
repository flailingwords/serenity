export const getRootElement = (name = 'app'): HTMLElement => {
    let rootElement = document.getElementById(name)

    if (rootElement == null) {
        rootElement = document.createElement('div')

        document.getElementsByTagName('BODY')[0].appendChild(rootElement)
    }

    return rootElement
}
