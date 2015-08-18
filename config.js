System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "lib-bundle.js": [
      "npm:react-dom@0.14.0-beta3.js",
      "npm:react-dom@0.14.0-beta3/index.js",
      "npm:react@0.14.0-beta3/lib/ReactDOM.js",
      "github:jspm/nodelibs-process@0.1.1.js",
      "npm:react@0.14.0-beta3/lib/ReactCurrentOwner.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMTextComponent.js",
      "npm:react@0.14.0-beta3/lib/ReactDefaultInjection.js",
      "npm:react@0.14.0-beta3/lib/ReactInstanceHandles.js",
      "npm:react@0.14.0-beta3/lib/ReactMount.js",
      "npm:react@0.14.0-beta3/lib/ReactPerf.js",
      "npm:react@0.14.0-beta3/lib/ReactReconciler.js",
      "npm:react@0.14.0-beta3/lib/ReactUpdates.js",
      "npm:react@0.14.0-beta3/lib/findDOMNode.js",
      "npm:react@0.14.0-beta3/lib/renderSubtreeIntoContainer.js",
      "npm:fbjs@0.1.0-alpha.4/lib/warning.js",
      "npm:fbjs@0.1.0-alpha.4/lib/ExecutionEnvironment.js",
      "github:jspm/nodelibs-process@0.1.1/index.js",
      "npm:react@0.14.0-beta3/lib/DOMPropertyOperations.js",
      "npm:react@0.14.0-beta3/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMComponent.js",
      "npm:react@0.14.0-beta3/lib/Object.assign.js",
      "npm:react@0.14.0-beta3/lib/escapeTextContentForBrowser.js",
      "npm:react@0.14.0-beta3/lib/validateDOMNesting.js",
      "npm:react@0.14.0-beta3/lib/BeforeInputEventPlugin.js",
      "npm:react@0.14.0-beta3/lib/ChangeEventPlugin.js",
      "npm:react@0.14.0-beta3/lib/ClientReactRootIndex.js",
      "npm:react@0.14.0-beta3/lib/DefaultEventPluginOrder.js",
      "npm:react@0.14.0-beta3/lib/EnterLeaveEventPlugin.js",
      "npm:react@0.14.0-beta3/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.14.0-beta3/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.14.0-beta3/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.0-beta3/lib/ReactEventListener.js",
      "npm:react@0.14.0-beta3/lib/ReactInjection.js",
      "npm:react@0.14.0-beta3/lib/ReactReconcileTransaction.js",
      "npm:react@0.14.0-beta3/lib/SelectEventPlugin.js",
      "npm:react@0.14.0-beta3/lib/ServerReactRootIndex.js",
      "npm:react@0.14.0-beta3/lib/SimpleEventPlugin.js",
      "npm:react@0.14.0-beta3/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.14.0-beta3/lib/ReactDefaultPerf.js",
      "npm:react@0.14.0-beta3/lib/ReactRootIndex.js",
      "npm:fbjs@0.1.0-alpha.4/lib/invariant.js",
      "npm:react@0.14.0-beta3/lib/DOMProperty.js",
      "npm:react@0.14.0-beta3/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.0-beta3/lib/ReactElement.js",
      "npm:react@0.14.0-beta3/lib/ReactEmptyComponent.js",
      "npm:react@0.14.0-beta3/lib/ReactInstanceMap.js",
      "npm:react@0.14.0-beta3/lib/ReactMarkupChecksum.js",
      "npm:react@0.14.0-beta3/lib/ReactUpdateQueue.js",
      "npm:fbjs@0.1.0-alpha.4/lib/emptyObject.js",
      "npm:fbjs@0.1.0-alpha.4/lib/containsNode.js",
      "npm:react@0.14.0-beta3/lib/instantiateReactComponent.js",
      "npm:react@0.14.0-beta3/lib/setInnerHTML.js",
      "npm:react@0.14.0-beta3/lib/shouldUpdateReactComponent.js",
      "npm:react@0.14.0-beta3/lib/ReactRef.js",
      "npm:react@0.14.0-beta3/lib/CallbackQueue.js",
      "npm:react@0.14.0-beta3/lib/PooledClass.js",
      "npm:react@0.14.0-beta3/lib/Transaction.js",
      "npm:fbjs@0.1.0-alpha.4/lib/emptyFunction.js",
      "npm:process@0.10.1.js",
      "npm:process@0.10.1/browser.js",
      "npm:react@0.14.0-beta3/lib/quoteAttributeValueForBrowser.js",
      "npm:react@0.14.0-beta3/lib/AutoFocusUtils.js",
      "npm:react@0.14.0-beta3/lib/CSSPropertyOperations.js",
      "npm:react@0.14.0-beta3/lib/EventConstants.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMButton.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMInput.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMOption.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMSelect.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMTextarea.js",
      "npm:react@0.14.0-beta3/lib/ReactMultiChild.js",
      "npm:react@0.14.0-beta3/lib/isEventSupported.js",
      "npm:fbjs@0.1.0-alpha.4/lib/keyOf.js",
      "npm:fbjs@0.1.0-alpha.4/lib/shallowEqual.js",
      "npm:react@0.14.0-beta3/lib/EventPropagators.js",
      "npm:react@0.14.0-beta3/lib/FallbackCompositionState.js",
      "npm:react@0.14.0-beta3/lib/SyntheticCompositionEvent.js",
      "npm:react@0.14.0-beta3/lib/SyntheticInputEvent.js",
      "npm:react@0.14.0-beta3/lib/EventPluginHub.js",
      "npm:react@0.14.0-beta3/lib/SyntheticEvent.js",
      "npm:react@0.14.0-beta3/lib/isTextInputElement.js",
      "npm:react@0.14.0-beta3/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.0-beta3/lib/DOMChildrenOperations.js",
      "npm:fbjs@0.1.0-alpha.4/lib/EventListener.js",
      "npm:react@0.14.0-beta3/lib/getEventTarget.js",
      "npm:fbjs@0.1.0-alpha.4/lib/getUnboundedScrollPosition.js",
      "npm:react@0.14.0-beta3/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.0-beta3/lib/ReactClass.js",
      "npm:react@0.14.0-beta3/lib/ReactNativeComponent.js",
      "npm:react@0.14.0-beta3/lib/ReactInputSelection.js",
      "npm:fbjs@0.1.0-alpha.4/lib/getActiveElement.js",
      "npm:react@0.14.0-beta3/lib/EventPluginUtils.js",
      "npm:react@0.14.0-beta3/lib/SyntheticClipboardEvent.js",
      "npm:react@0.14.0-beta3/lib/SyntheticFocusEvent.js",
      "npm:react@0.14.0-beta3/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.14.0-beta3/lib/SyntheticDragEvent.js",
      "npm:react@0.14.0-beta3/lib/SyntheticTouchEvent.js",
      "npm:react@0.14.0-beta3/lib/SyntheticUIEvent.js",
      "npm:react@0.14.0-beta3/lib/SyntheticWheelEvent.js",
      "npm:react@0.14.0-beta3/lib/getEventCharCode.js",
      "npm:react@0.14.0-beta3/lib/ReactDefaultPerfAnalysis.js",
      "npm:fbjs@0.1.0-alpha.4/lib/performanceNow.js",
      "npm:react@0.14.0-beta3/lib/EventPluginRegistry.js",
      "npm:react@0.14.0-beta3/lib/ReactEventEmitterMixin.js",
      "npm:react@0.14.0-beta3/lib/ViewportMetrics.js",
      "npm:react@0.14.0-beta3/lib/adler32.js",
      "npm:fbjs@0.1.0-alpha.4/lib/isTextNode.js",
      "npm:react@0.14.0-beta3/lib/ReactCompositeComponent.js",
      "npm:react@0.14.0-beta3/lib/ReactOwner.js",
      "npm:fbjs@0.1.0-alpha.4/lib/focusNode.js",
      "npm:react@0.14.0-beta3/lib/CSSProperty.js",
      "npm:fbjs@0.1.0-alpha.4/lib/camelizeStyleName.js",
      "npm:react@0.14.0-beta3/lib/dangerousStyleValue.js",
      "npm:fbjs@0.1.0-alpha.4/lib/hyphenateStyleName.js",
      "npm:react@0.14.0-beta3/lib/memoizeStringOnly.js",
      "npm:fbjs@0.1.0-alpha.4/lib/keyMirror.js",
      "npm:react@0.14.0-beta3/lib/LinkedValueUtils.js",
      "npm:react@0.14.0-beta3/lib/ReactChildren.js",
      "npm:react@0.14.0-beta3/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.0-beta3/lib/ReactChildReconciler.js",
      "npm:react@0.14.0-beta3/lib/accumulateInto.js",
      "npm:react@0.14.0-beta3/lib/forEachAccumulated.js",
      "npm:react@0.14.0-beta3/lib/getTextContentAccessor.js",
      "npm:react@0.14.0-beta3/lib/getEventModifierState.js",
      "npm:react@0.14.0-beta3/lib/Danger.js",
      "npm:react@0.14.0-beta3/lib/setTextContent.js",
      "npm:react@0.14.0-beta3/lib/ReactComponent.js",
      "npm:react@0.14.0-beta3/lib/ReactErrorUtils.js",
      "npm:react@0.14.0-beta3/lib/ReactPropTypeLocations.js",
      "npm:react@0.14.0-beta3/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.14.0-beta3/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMSelection.js",
      "npm:react@0.14.0-beta3/lib/getEventKey.js",
      "npm:fbjs@0.1.0-alpha.4/lib/performance.js",
      "npm:fbjs@0.1.0-alpha.4/lib/isNode.js",
      "npm:fbjs@0.1.0-alpha.4/lib/camelize.js",
      "npm:fbjs@0.1.0-alpha.4/lib/hyphenate.js",
      "npm:react@0.14.0-beta3/lib/ReactPropTypes.js",
      "npm:react@0.14.0-beta3/lib/ReactFragment.js",
      "npm:react@0.14.0-beta3/lib/traverseAllChildren.js",
      "npm:react@0.14.0-beta3/lib/flattenChildren.js",
      "npm:fbjs@0.1.0-alpha.4/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.1.0-alpha.4/lib/getMarkupWrap.js",
      "npm:react@0.14.0-beta3/lib/getNodeForCharacterOffset.js",
      "npm:react@0.14.0-beta3/lib/getIteratorFn.js",
      "npm:fbjs@0.1.0-alpha.4/lib/createArrayFromMixed.js",
      "npm:fbjs@0.1.0-alpha.4/lib/toArray.js",
      "npm:react@0.14.0-beta3.js",
      "npm:react@0.14.0-beta3/react.js",
      "npm:react@0.14.0-beta3/lib/React.js",
      "npm:react@0.14.0-beta3/lib/deprecated.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMServer.js",
      "npm:react@0.14.0-beta3/lib/ReactIsomorphic.js",
      "npm:react@0.14.0-beta3/lib/ReactServerRendering.js",
      "npm:react@0.14.0-beta3/lib/ReactDOMFactories.js",
      "npm:react@0.14.0-beta3/lib/ReactElementValidator.js",
      "npm:react@0.14.0-beta3/lib/onlyChild.js",
      "npm:react@0.14.0-beta3/lib/ReactServerBatchingStrategy.js",
      "npm:react@0.14.0-beta3/lib/ReactServerRenderingTransaction.js",
      "npm:fbjs@0.1.0-alpha.4/lib/mapObject.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@1.1.0",
    "jquery": "github:components/jquery@2.1.4",
    "react": "npm:react@0.14.0-beta3",
    "react-dom": "npm:react-dom@0.14.0-beta3",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.2"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.4.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@1.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:fbjs@0.1.0-alpha.4": {
      "core-js": "npm:core-js@1.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@7.0.4",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:react-dom@0.14.0-beta3": {
      "fbjs": "npm:fbjs@0.1.0-alpha.4",
      "react": "npm:react@0.14.0-beta3"
    },
    "npm:react@0.14.0-beta3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.1.0-alpha.4",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
