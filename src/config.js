export const EXTENSION_NAME = "NewQlikViewExtension";
export const QVA_REMOTE = Qva.Remote + (Qva.Remote.indexOf('?') >= 0 ? '&' : '?') + 'public=only' + '&name=' + 'Extensions/' + EXTENSION_NAME;