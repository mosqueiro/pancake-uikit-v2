'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a, _b;
var scaleVariants = (_a = {},
    _a[scales.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a[scales.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a[scales.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b[variants.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b[variants.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b[variants.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b[variants.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$2;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants.PRIMARY,
    scale: scales.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$d = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default['default'].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default['default'].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default['default'].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default['default'].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default['default'].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("g", { fill: "#ffffff" },
            React__default['default'].createElement("path", { d: "M15.12 31.34 c-0.01 -0.01 -0.20 -0.02 -0.42 -0.04 -1.38 -0.09 -3.19 -0.51 -4.36 -1.01 -1.36 -0.58 -1.52 -0.66 -2.49 -1.27 -0.75 -0.47 -0.87 -0.56 -1.57 -1.12 -1.34 -1.07 -2.57 -2.52 -3.56 -4.18 -0.31 -0.52 -0.94 -1.85 -1.18 -2.53 -0.34 -0.92 -0.64 -2.30 -0.80 -3.58 -0.07 -0.60 -0.10 -2.44 -0.05 -2.76 0.02 -0.10 0.06 -0.44 0.10 -0.75 0.17 -1.50 0.52 -2.80 1.15 -4.22 0.48 -1.08 0.73 -1.54 1.49 -2.68 0.65 -0.97 1.88 -2.30 2.83 -3.06 0.61 -0.49 1 -0.77 1.65 -1.17 1.37 -0.86 3 -1.54 4.46 -1.88 2.42 -0.55 4.50 -0.58 6.93 -0.08 1.27 0.26 2.42 0.67 3.78 1.35 0.58 0.29 1.76 1.03 2.22 1.39 1.70 1.34 2.73 2.49 3.89 4.34 0.49 0.78 1.12 2.14 1.43 3.07 0.72 2.20 0.94 4.76 0.60 7.14 -0.16 1.13 -0.63 2.90 -0.88 3.33 -0.02 0.04 -0.13 0.29 -0.24 0.55 -0.74 1.74 -1.83 3.33 -3.22 4.72 -1.36 1.36 -3 2.48 -4.68 3.19 -0.22 0.09 -0.47 0.20 -0.56 0.24 -1.04 0.46 -2.86 0.87 -4.41 0.99 -0.51 0.04 -2.05 0.06 -2.09 0.03z m2.60 -0.76 c2.46 -0.33 4.73 -1.21 6.71 -2.61 1.31 -0.93 2.62 -2.23 3.54 -3.54 1.40 -1.98 2.28 -4.26 2.62 -6.75 0.09 -0.68 0.10 -2.54 0.02 -3.22 -0.30 -2.44 -1.17 -4.79 -2.50 -6.71 -0.73 -1.05 -2.03 -2.46 -2.97 -3.21 -2.29 -1.82 -4.84 -2.86 -7.82 -3.19 -0.58 -0.06 -2.08 -0.07 -2.66 -0 -3.52 0.39 -6.58 1.85 -9.02 4.29 -2.30 2.30 -3.77 5.24 -4.22 8.46 -0.41 2.96 0.18 6.10 1.66 8.85 0.33 0.61 1.01 1.63 1.46 2.19 0.20 0.24 0.59 0.68 0.88 0.98 1.32 1.36 2.53 2.24 4.16 3.04 1.67 0.82 3.30 1.29 5.18 1.48 0.58 0.06 2.37 0.02 2.96 -0.05z" }),
            React__default['default'].createElement("path", { d: "M14 17.11 c-0.06 -0.03 -0.48 -0.27 -0.94 -0.54 -0.46 -0.26 -0.94 -0.53 -1.05 -0.59 -0.20 -0.10 -0.21 -0.12 -0.21 -0.26 0 -0.11 0.05 -0.23 0.22 -0.48 0.26 -0.39 0.53 -0.92 0.72 -1.40 0.13 -0.32 0.14 -0.34 0.27 -0.35 l0.13 -0.01 0.16 0.67 c0.20 0.81 0.46 1.53 0.80 2.25 0.14 0.30 0.26 0.59 0.26 0.65 0 0.10 -0.01 0.12 -0.13 0.12 -0.07 0 -0.18 -0.02 -0.23 -0.05z" }),
            React__default['default'].createElement("path", { d: "M17.64 17.03 c0 -0.08 0.08 -0.29 0.18 -0.51 0.44 -0.91 0.74 -1.79 1 -2.94 0.02 -0.07 0.05 -0.09 0.15 -0.09 0.13 0 0.14 0.01 0.27 0.35 0.18 0.49 0.45 1.01 0.72 1.42 0.31 0.47 0.32 0.57 0.02 0.72 -0.11 0.06 -0.63 0.36 -1.15 0.65 -1.04 0.60 -1.20 0.64 -1.20 0.40z" }),
            React__default['default'].createElement("path", { d: "M7.96 13.87 c-1.20 -0.60 -2.10 -1.02 -3.37 -1.60 -0.31 -0.14 -0.31 -0.14 -0.31 -0.29 0 -0.28 0.47 -1.37 0.92 -2.16 1.65 -2.86 4.33 -4.93 7.50 -5.79 0.78 -0.21 1.88 -0.38 2.45 -0.38 l0.29 0 0 0.12 c0 0.08 -0.06 0.20 -0.18 0.35 -0.91 1.18 -1.66 2.81 -2.02 4.42 l-0.09 0.39 -0.15 0 -0.14 0 -0.11 -0.32 c-0.14 -0.38 -0.42 -0.96 -0.67 -1.34 -0.14 -0.22 -0.80 -1.10 -0.96 -1.27 -0.04 -0.04 -0.78 0.90 -1.06 1.36 -0.44 0.70 -0.78 1.55 -0.96 2.44 -0.14 0.66 -0.18 1.72 -0.08 2.38 0.09 0.59 0.26 1.25 0.46 1.77 0.09 0.23 0.16 0.46 0.16 0.52 0 0.22 -0.20 0.15 -1.68 -0.58z" }),
            React__default['default'].createElement("path", { d: "M22.37 14.39 c0.01 -0.10 0.10 -0.40 0.20 -0.67 0.34 -0.94 0.50 -1.92 0.46 -2.78 -0.06 -1.22 -0.42 -2.44 -1.01 -3.44 -0.16 -0.28 -0.88 -1.26 -1.10 -1.51 -0.03 -0.04 -0.69 0.79 -1 1.25 -0.22 0.33 -0.56 1.02 -0.70 1.42 -0.11 0.30 -0.12 0.31 -0.24 0.31 l-0.13 0 -0.09 -0.39 c-0.36 -1.59 -1.01 -3.03 -1.94 -4.32 -0.19 -0.27 -0.26 -0.40 -0.26 -0.49 l0 -0.13 0.49 0.02 c0.96 0.05 2.28 0.33 3.31 0.72 2.70 1 4.91 2.87 6.38 5.37 0.44 0.76 0.98 2 0.98 2.26 0 0.11 -0.02 0.13 -0.21 0.21 -0.84 0.37 -2.15 1 -3.40 1.62 -1.07 0.53 -1.51 0.73 -1.62 0.73 l-0.14 0 0.02 -0.17z" })),
        React__default['default'].createElement("g", { fill: "#ffcf4b" },
            React__default['default'].createElement("path", { d: "M15.44 17.36 c-0.82 -1.24 -1.38 -2.68 -1.64 -4.18 -0.14 -0.81 -0.18 -1.43 -0.15 -2.44 0.03 -1.37 0.18 -2.24 0.57 -3.45 0.24 -0.73 0.73 -1.78 1.12 -2.37 0.21 -0.32 0.24 -0.35 0.36 -0.35 0.10 0 0.15 0.03 0.21 0.11 0.18 0.24 0.60 0.88 0.69 1.05 0.06 0.10 0.11 0.19 0.12 0.20 0.05 0.04 0.32 0.61 0.32 0.66 0 0.03 0.02 0.06 0.04 0.06 0.02 0 0.04 0.03 0.04 0.07 0 0.04 0.03 0.10 0.06 0.14 0.03 0.04 0.06 0.10 0.06 0.14 0 0.03 0.04 0.15 0.10 0.26 0.25 0.53 0.53 1.73 0.63 2.64 0.06 0.63 0.03 2.26 -0.06 2.82 -0.26 1.70 -0.78 3.18 -1.59 4.60 -0.28 0.49 -0.30 0.52 -0.42 0.52 -0.12 0 -0.15 -0.03 -0.45 -0.48z" }),
            React__default['default'].createElement("path", { d: "M10.68 14.93 c-0.73 -1.12 -1.10 -2.56 -1.03 -4.05 0.05 -1.16 0.30 -2.08 0.80 -2.99 l0.20 -0.37 0.16 0.01 c0.16 0.01 0.17 0.02 0.38 0.35 0.12 0.19 0.26 0.44 0.31 0.56 0.06 0.12 0.13 0.27 0.16 0.33 0.03 0.06 0.06 0.14 0.06 0.18 0 0.04 0.02 0.09 0.04 0.11 0.06 0.06 0.23 0.68 0.31 1.12 0.10 0.56 0.10 2 0 2.54 -0.14 0.79 -0.39 1.50 -0.75 2.13 -0.18 0.32 -0.21 0.35 -0.32 0.35 -0.12 0 -0.15 -0.03 -0.30 -0.27z" }),
            React__default['default'].createElement("path", { d: "M20.49 14.95 c-0.74 -1.13 -1.10 -2.56 -1.04 -4.05 0.06 -1.19 0.31 -2.14 0.82 -3.05 0.18 -0.32 0.19 -0.33 0.33 -0.33 0.14 0 0.16 0.02 0.34 0.28 0.10 0.16 0.18 0.30 0.18 0.32 0 0.02 0.04 0.07 0.08 0.12 0.04 0.05 0.09 0.14 0.10 0.21 0.01 0.06 0.04 0.12 0.06 0.13 0.02 0.01 0.04 0.06 0.04 0.10 0 0.04 0.02 0.08 0.04 0.08 0.02 0 0.04 0.04 0.04 0.08 0 0.05 0.03 0.12 0.06 0.17 0.08 0.12 0.28 0.93 0.35 1.37 0.06 0.45 0.06 1.77 -0 2.20 -0.13 0.83 -0.42 1.68 -0.79 2.30 -0.17 0.29 -0.20 0.32 -0.32 0.32 -0.11 0 -0.14 -0.03 -0.29 -0.25z" })),
        React__default['default'].createElement("g", { fill: "#f8ac3c" },
            React__default['default'].createElement("path", { d: "M15.82 17.90 c-0.01 -0.04 -0.02 -0.12 -0.02 -0.19 0 -0.12 0 -0.12 0.06 -0.04 0.04 0.06 0.06 0.06 0.06 0.02 0 -0.03 0 -0.07 0 -0.09 0 -0.02 0.02 -0.03 0.04 -0.03 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 0 -0.05 0.04 -0.06 0.03 -0.01 0.05 -0.04 0.04 -0.06 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.02 0 0.04 -0.02 0.02 -0.04 -0.01 -0.02 0 -0.05 0.04 -0.06 0.03 -0.01 0.05 -0.04 0.04 -0.06 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.06 0 0.45 -0.79 0.42 -0.84 -0.02 -0.02 -0 -0.04 0.02 -0.04 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.03 0 0.04 -0.01 0.02 -0.02 -0.01 -0.02 0 -0.05 0.04 -0.08 0.03 -0.04 0.05 -0.08 0.04 -0.11 -0.01 -0.02 0.01 -0.07 0.04 -0.10 0.03 -0.03 0.05 -0.08 0.04 -0.11 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.03 0 0.04 -0.02 0.03 -0.05 -0.01 -0.03 0.01 -0.08 0.04 -0.11 0.03 -0.03 0.05 -0.08 0.04 -0.11 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 0 -0.06 0.02 -0.06 0.02 0 0.04 -0.04 0.02 -0.08 -0.01 -0.04 -0 -0.08 0.02 -0.08 0.02 0 0.03 -0.03 0.02 -0.06 -0.01 -0.03 0 -0.06 0.02 -0.06 0.02 0 0.04 -0.04 0.02 -0.08 -0.01 -0.04 -0 -0.08 0.02 -0.08 0.02 0 0.02 -0.04 0.01 -0.08 -0.02 -0.05 -0.01 -0.08 0.02 -0.08 0.03 0 0.04 -0.03 0.02 -0.08 -0.02 -0.05 -0.01 -0.08 0.02 -0.08 0.03 0 0.04 -0.03 0.03 -0.08 -0.01 -0.04 -0 -0.09 0.02 -0.10 0.02 -0.01 0.03 -0.05 0.02 -0.08 -0.02 -0.04 -0 -0.09 0.02 -0.12 0.02 -0.03 0.03 -0.07 0.02 -0.10 -0.01 -0.02 -0.01 -0.06 0.01 -0.09 0.02 -0.03 0.04 -0.10 0.04 -0.15 0.02 -0.16 0.04 -0.30 0.05 -0.34 0.01 -0.04 0.02 -0.08 0.06 -0.52 0.03 -0.32 0.03 -1.86 -0 -2.16 -0.05 -0.41 -0.08 -0.63 -0.12 -0.82 -0.04 -0.18 -0.06 -0.34 -0.07 -0.40 0 -0.03 -0.02 -0.08 -0.04 -0.11 -0.02 -0.03 -0.03 -0.07 -0.02 -0.09 0.02 -0.02 0 -0.05 -0.02 -0.06 -0.02 -0.02 -0.03 -0.05 -0.02 -0.08 0.01 -0.03 0.01 -0.06 -0.01 -0.08 -0.01 -0.02 -0.03 -0.05 -0.04 -0.08 -0.02 -0.11 -0.04 -0.20 -0.05 -0.21 -0.01 -0.01 -0.02 -0.03 -0.02 -0.05 -0 -0.02 -0.02 -0.05 -0.02 -0.06 -0 -0.01 -0.02 -0.04 -0.02 -0.06 -0 -0.02 -0.02 -0.05 -0.02 -0.06 -0 -0.01 -0.02 -0.04 -0.02 -0.06 -0 -0.02 -0.02 -0.05 -0.02 -0.06 -0 -0.01 -0.02 -0.04 -0.02 -0.06 -0 -0.02 -0.02 -0.05 -0.02 -0.06 -0 -0.01 -0.01 -0.03 -0.02 -0.05 -0 -0.02 -0.04 -0.10 -0.08 -0.18 -0.04 -0.08 -0.08 -0.18 -0.09 -0.23 -0.01 -0.04 -0.04 -0.12 -0.08 -0.17 -0.04 -0.05 -0.05 -0.11 -0.04 -0.12 0.01 -0.02 0 -0.03 -0.02 -0.03 -0.02 0 -0.05 -0.05 -0.07 -0.12 -0.01 -0.06 -0.08 -0.22 -0.16 -0.34 -0.07 -0.12 -0.12 -0.22 -0.11 -0.22 0.02 0 0.01 -0.02 -0.02 -0.03 -0.02 -0.02 -0.08 -0.11 -0.14 -0.21 -0.09 -0.17 -0.51 -0.81 -0.69 -1.05 -0.08 -0.10 -0.08 -0.11 -0.13 -0.04 -0.04 0.06 -0.05 0.05 -0.05 -0.08 0 -0.22 0.22 -0.50 0.39 -0.50 0.15 0 0.22 0.08 0.65 0.74 0.34 0.53 0.81 1.47 1.04 2.10 0.22 0.61 0.46 1.54 0.57 2.24 0.08 0.50 0.09 0.73 0.09 1.82 0 1.09 -0.01 1.31 -0.09 1.82 -0.28 1.78 -0.97 3.52 -1.90 4.77 -0.21 0.28 -0.24 0.31 -0.37 0.31 -0.09 0 -0.14 -0.02 -0.16 -0.06z" }),
            React__default['default'].createElement("path", { d: "M10.90 15.26 c-0.01 -0.04 -0.02 -0.12 -0.02 -0.19 0 -0.12 0.01 -0.12 0.06 -0.06 0.05 0.07 0.06 0.07 0.10 -0.01 0.02 -0.05 0.03 -0.08 0.01 -0.08 -0.02 0 0 -0.02 0.04 -0.04 0.04 -0.02 0.06 -0.06 0.05 -0.08 -0.02 -0.02 -0 -0.04 0.02 -0.04 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0.01 -0.04 0.02 -0.04 0.06 0 0.21 -0.31 0.18 -0.36 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.03 0 0.04 -0.01 0.02 -0.02 -0.01 -0.02 0 -0.05 0.04 -0.08 0.03 -0.04 0.05 -0.09 0.04 -0.12 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.03 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.02 -0.03 -0.01 -0.07 0.02 -0.08 0.02 -0.01 0.03 -0.05 0.02 -0.08 -0.01 -0.03 0 -0.06 0.02 -0.06 0.02 0 0.04 -0.04 0.02 -0.08 -0.01 -0.04 -0 -0.08 0.02 -0.08 0.02 0 0.03 -0.04 0.02 -0.08 -0.01 -0.04 -0 -0.09 0.02 -0.10 0.02 -0.02 0.04 -0.06 0.04 -0.11 0 -0.05 0.01 -0.15 0.02 -0.23 0.05 -0.28 0.06 -0.59 0.06 -1.06 0 -0.55 -0.03 -0.92 -0.10 -1.32 -0.01 -0.06 -0.02 -0.15 -0.03 -0.18 0 -0.03 -0.02 -0.08 -0.04 -0.11 -0.02 -0.03 -0.03 -0.07 -0.02 -0.09 0.02 -0.02 0.01 -0.05 -0.02 -0.06 -0.02 -0.02 -0.03 -0.04 -0.02 -0.06 0.01 -0.02 0 -0.06 -0.02 -0.10 -0.03 -0.03 -0.04 -0.06 -0.02 -0.06 0.02 0 0.01 -0.03 -0.02 -0.06 -0.03 -0.03 -0.04 -0.06 -0.02 -0.06 0.02 0 0.01 -0.03 -0.02 -0.06 -0.03 -0.03 -0.04 -0.06 -0.02 -0.06 0.02 0 0.01 -0.02 -0.01 -0.05 -0.02 -0.03 -0.05 -0.10 -0.06 -0.16 -0.01 -0.06 -0.05 -0.16 -0.09 -0.22 -0.04 -0.06 -0.07 -0.12 -0.07 -0.14 0.02 -0.07 -0.50 -0.97 -0.59 -1.02 -0.02 -0.01 -0.06 0.01 -0.09 0.05 -0.05 0.07 -0.06 0.06 -0.06 -0.06 0 -0.09 0.04 -0.20 0.13 -0.33 0.12 -0.18 0.14 -0.19 0.29 -0.18 0.15 0.01 0.17 0.03 0.35 0.29 0.26 0.37 0.60 1.07 0.75 1.53 0.65 2.02 0.36 4.41 -0.73 6.03 -0.21 0.30 -0.23 0.32 -0.38 0.33 -0.12 0.01 -0.17 -0 -0.19 -0.05z" }),
            React__default['default'].createElement("path", { d: "M20.70 15.26 c-0.01 -0.04 -0.02 -0.12 -0.02 -0.19 0 -0.12 0.01 -0.12 0.06 -0.06 0.05 0.07 0.06 0.07 0.08 0 0.02 -0.04 0.03 -0.08 0.03 -0.09 0 -0.01 0.03 -0.04 0.06 -0.05 0.03 -0.02 0.05 -0.05 0.04 -0.07 -0.02 -0.02 -0 -0.04 0.02 -0.04 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 -0.01 -0.04 0.02 -0.04 0.06 0 0.21 -0.31 0.18 -0.36 -0.01 -0.02 -0 -0.04 0.02 -0.04 0.03 0 0.04 -0.01 0.02 -0.02 -0.01 -0.02 0 -0.05 0.04 -0.08 0.03 -0.04 0.05 -0.08 0.04 -0.11 -0.01 -0.02 0.01 -0.07 0.04 -0.10 0.03 -0.03 0.05 -0.08 0.04 -0.11 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.02 -0.06 0.02 0 0.04 -0.03 0.02 -0.06 -0.02 -0.03 -0.01 -0.07 0.02 -0.08 0.02 -0.01 0.03 -0.05 0.02 -0.08 -0.01 -0.03 -0 -0.06 0.02 -0.08 0.02 -0.01 0.03 -0.05 0.02 -0.08 -0.01 -0.03 -0 -0.06 0.02 -0.08 0.02 -0.01 0.03 -0.05 0.02 -0.08 -0.01 -0.03 0 -0.06 0.02 -0.08 0.02 -0.01 0.03 -0.07 0.02 -0.12 -0.01 -0.05 -0.01 -0.10 0.02 -0.12 0.02 -0.01 0.04 -0.07 0.04 -0.13 0 -0.06 0.02 -0.22 0.03 -0.37 0.06 -0.58 0.03 -1.38 -0.08 -1.93 -0.01 -0.06 -0.03 -0.15 -0.04 -0.20 -0.01 -0.05 -0.03 -0.14 -0.04 -0.19 -0.01 -0.06 -0.03 -0.13 -0.04 -0.16 -0.01 -0.03 -0.02 -0.06 -0.02 -0.07 -0.01 -0.01 -0.02 -0.03 -0.02 -0.05 -0 -0.02 -0.02 -0.05 -0.02 -0.07 -0 -0.02 -0.01 -0.05 -0 -0.07 0 -0.02 -0.02 -0.06 -0.04 -0.09 -0.02 -0.03 -0.04 -0.06 -0.02 -0.06 0.01 0 -0.01 -0.06 -0.06 -0.15 -0.04 -0.08 -0.07 -0.16 -0.06 -0.18 0.01 -0.02 0 -0.03 -0.02 -0.03 -0.02 0 -0.04 -0.03 -0.04 -0.07 0 -0.04 -0.03 -0.11 -0.06 -0.15 -0.03 -0.04 -0.05 -0.09 -0.04 -0.11 0.01 -0.02 0 -0.04 -0.02 -0.04 -0.02 0 -0.03 -0.02 -0.02 -0.04 0.01 -0.02 0 -0.04 -0.02 -0.04 -0.02 0 -0.03 -0.02 -0.02 -0.04 0.01 -0.02 0.01 -0.04 -0.02 -0.04 -0.02 0 -0.05 -0.04 -0.06 -0.08 -0.02 -0.08 -0.31 -0.53 -0.38 -0.61 -0.02 -0.02 -0.06 -0.01 -0.10 0.04 -0.05 0.07 -0.06 0.07 -0.06 -0.07 0 -0.10 0.04 -0.20 0.13 -0.33 0.12 -0.17 0.14 -0.18 0.29 -0.17 0.15 0.01 0.17 0.03 0.35 0.29 0.11 0.16 0.29 0.48 0.41 0.72 1.04 2.13 0.89 4.89 -0.38 6.81 -0.24 0.36 -0.24 0.37 -0.40 0.37 -0.10 0 -0.16 -0.02 -0.18 -0.06z" })),
        React__default['default'].createElement("g", { fill: "#6eb260" },
            React__default['default'].createElement("path", { d: "M15.08 29.96 c-0.23 -0.02 -0.49 -0.03 -0.57 -0.04 -0.14 -0 -0.15 -0.01 -0.15 -0.14 0 -0.11 0.10 -0.26 0.69 -0.97 2.13 -2.60 4.09 -4.76 6.57 -7.24 2.46 -2.46 4.76 -4.54 7.30 -6.62 0.60 -0.50 0.76 -0.60 0.86 -0.60 l0.12 0 0.02 0.27 c0.02 0.15 0.03 0.35 0.03 0.45 l0 0.18 -1.33 1.34 c-3.98 4 -7.45 8.11 -10.59 12.54 l-0.54 0.76 -0.20 0.02 c-0.36 0.04 -1.78 0.06 -2.22 0.02z" }),
            React__default['default'].createElement("path", { d: "M11.22 29.18 c-0.59 -0.22 -1.05 -0.42 -1.63 -0.71 -0.53 -0.27 -0.55 -0.28 -0.55 -0.40 0 -0.14 0.03 -0.17 1.32 -1.33 5.62 -5.06 11.88 -9.50 18.62 -13.20 0.34 -0.18 0.53 -0.26 0.62 -0.26 l0.14 0 0.05 0.28 c0.08 0.50 0.16 0.40 -0.93 1.14 -4.18 2.82 -8.20 6.03 -12.10 9.68 -1.02 0.96 -3.46 3.39 -4.30 4.30 -0.70 0.75 -0.64 0.73 -1.24 0.51z" }),
            React__default['default'].createElement("path", { d: "M20.20 29.16 c0 -0.14 0.18 -0.45 1.17 -2.02 2.28 -3.59 4.92 -7.20 7.79 -10.61 0.52 -0.63 0.54 -0.64 0.70 -0.65 l0.16 0 -0.03 0.65 -0.03 0.65 -0.30 0.44 c-2.28 3.34 -4.06 6.22 -5.72 9.32 -0.60 1.11 -0.50 1.01 -1.53 1.54 -0.80 0.40 -1.72 0.77 -1.99 0.80 l-0.21 0.02 0 -0.13z" }),
            React__default['default'].createElement("path", { d: "M7.06 25.13 c-1.36 -2.40 -3.25 -5.39 -4.71 -7.49 l-0.32 -0.45 -0.02 -0.66 -0.02 -0.66 0.14 0 c0.14 0 0.17 0.03 0.84 0.83 2.01 2.40 3.80 4.75 5.48 7.17 0.50 0.72 0.59 0.88 0.59 1 -0 0.14 -0.03 0.16 -0.62 0.62 -0.52 0.39 -0.64 0.47 -0.76 0.47 l-0.14 0 -0.47 -0.83z" }),
            React__default['default'].createElement("path", { d: "M9.27 23.09 c-1.86 -2.25 -3.88 -4.45 -6.08 -6.65 l-1.15 -1.15 0 -0.31 c0 -0.17 0.01 -0.38 0.02 -0.46 0.02 -0.14 0.04 -0.15 0.15 -0.15 0.10 0 0.27 0.12 0.90 0.64 2.22 1.83 3.87 3.30 6.13 5.47 1.69 1.62 2.39 2.36 2.39 2.52 0 0.10 -0.06 0.16 -0.65 0.58 -0.54 0.39 -0.68 0.47 -0.79 0.47 -0.13 -0 -0.18 -0.05 -0.93 -0.95z" }),
            React__default['default'].createElement("path", { d: "M12.20 21.66 c-2.74 -2.38 -5.79 -4.72 -8.97 -6.89 -0.52 -0.36 -0.98 -0.66 -1.02 -0.67 -0.05 -0.02 -0.06 -0.07 -0.04 -0.33 0.04 -0.45 0.05 -0.48 0.21 -0.48 0.14 0 0.67 0.28 2.24 1.17 3.22 1.84 6.13 3.72 9.15 5.92 0.70 0.51 0.71 0.52 0.71 0.66 -0 0.15 -0.01 0.15 -0.74 0.64 -0.50 0.33 -0.78 0.49 -0.85 0.49 -0.08 -0 -0.26 -0.13 -0.69 -0.50z" }),
            React__default['default'].createElement("path", { d: "M15.04 19.62 c-3.59 -2.22 -7.52 -4.28 -11.56 -6.08 l-1.10 -0.49 0 -0.26 c0.01 -0.49 0.48 -1.87 0.99 -2.93 0.71 -1.46 1.46 -2.54 2.60 -3.69 2.23 -2.28 4.99 -3.64 8.24 -4.08 0.66 -0.09 2.73 -0.10 3.40 -0.02 2.78 0.34 5.18 1.35 7.30 3.08 0.51 0.42 1.44 1.34 1.85 1.83 1.33 1.61 2.28 3.47 2.78 5.42 0.16 0.66 0.22 0.59 -0.72 1 -4.09 1.80 -8.06 3.88 -11.83 6.19 -0.66 0.40 -0.90 0.53 -1 0.53 -0.10 0 -0.34 -0.13 -0.95 -0.50z m2.02 -1.24 c3.48 -2.09 7.27 -4.07 10.76 -5.61 0.38 -0.16 0.70 -0.31 0.71 -0.33 0.04 -0.04 -0.13 -0.56 -0.38 -1.19 -1.28 -3.22 -3.77 -5.81 -6.92 -7.20 -3.43 -1.52 -7.20 -1.50 -10.62 0.06 -3.31 1.51 -5.87 4.35 -7.02 7.78 -0.10 0.30 -0.16 0.52 -0.14 0.54 0.02 0.02 0.37 0.18 0.78 0.36 3.57 1.58 7.90 3.86 11.15 5.86 0.30 0.18 0.57 0.34 0.59 0.34 0.02 0 0.51 -0.28 1.08 -0.62z" })),
        React__default['default'].createElement("g", { fill: "#0f5f54" },
            React__default['default'].createElement("path", { d: "M14.64 30.76 c-1.88 -0.19 -3.51 -0.65 -5.18 -1.48 -1.63 -0.80 -2.84 -1.69 -4.16 -3.04 -1.16 -1.20 -2.12 -2.61 -2.82 -4.14 -1.68 -3.70 -1.75 -7.97 -0.20 -11.73 1.36 -3.30 3.92 -6.04 7.11 -7.64 1.58 -0.79 3.29 -1.28 5.15 -1.49 0.58 -0.06 2.32 -0.06 2.90 0 2.99 0.33 5.53 1.37 7.82 3.19 0.94 0.75 2.24 2.16 2.97 3.21 1.32 1.92 2.20 4.27 2.50 6.71 0.08 0.69 0.07 2.78 -0.02 3.46 -0.34 2.50 -1.22 4.77 -2.62 6.75 -0.93 1.31 -2.23 2.62 -3.54 3.54 -1.98 1.40 -4.24 2.28 -6.71 2.61 -0.59 0.08 -2.60 0.11 -3.20 0.05z m2.52 -0.94 l0.22 -0.02 0.54 -0.76 c3.14 -4.43 6.62 -8.56 10.59 -12.55 l1.34 -1.34 -0.04 -0.33 -0.03 -0.33 -0.74 0.60 c-3.94 3.22 -7.89 7 -11.27 10.81 -1.60 1.80 -3.33 3.88 -3.24 3.90 0.35 0.07 2.02 0.09 2.63 0.02z m-4.68 -1.42 c0.97 -1.03 3.08 -3.14 4.16 -4.14 3.87 -3.62 7.92 -6.86 12.10 -9.68 0.74 -0.50 0.98 -0.68 0.96 -0.72 -0.01 -0.04 -0.03 -0.15 -0.05 -0.26 -0.01 -0.11 -0.04 -0.19 -0.04 -0.19 -0.07 0 -2.46 1.35 -3.77 2.13 -5.84 3.49 -11.47 7.70 -16.37 12.25 l-0.31 0.29 0.55 0.28 c0.70 0.36 1.93 0.86 2.02 0.84 0.01 -0 0.36 -0.36 0.76 -0.79z m8.62 0.49 c0.59 -0.23 1.67 -0.76 2 -0.98 0.18 -0.12 0.23 -0.20 0.71 -1.09 1.67 -3.10 3.37 -5.87 5.72 -9.32 l0.30 -0.44 0.03 -0.53 c0.01 -0.29 0.01 -0.53 -0.01 -0.53 -0.07 0 -1.81 2.13 -2.99 3.64 -2.28 2.92 -4.58 6.27 -6.46 9.38 l-0.10 0.16 0.12 -0.03 c0.06 -0.02 0.37 -0.13 0.68 -0.25z m-12.80 -3.52 c0.33 -0.26 0.61 -0.47 0.62 -0.48 0.07 -0.05 -2.42 -3.49 -3.87 -5.35 -0.94 -1.20 -2.86 -3.54 -2.91 -3.54 -0.01 0 -0.01 0.24 0 0.54 l0.02 0.54 0.32 0.45 c1.46 2.09 3.34 5.09 4.71 7.48 0.26 0.46 0.48 0.83 0.49 0.83 0.01 0 0.29 -0.21 0.63 -0.47z m2.60 -1.94 l0.62 -0.45 -0.56 -0.59 c-0.57 -0.60 -2.66 -2.63 -3.66 -3.54 -1.32 -1.21 -2.86 -2.55 -4.30 -3.73 -0.88 -0.72 -0.82 -0.71 -0.84 -0.19 l-0 0.23 1.15 1.15 c2.21 2.20 4.22 4.41 6.08 6.65 0.44 0.52 0.81 0.94 0.83 0.93 0.02 -0.01 0.32 -0.22 0.67 -0.46z m3.47 -2.40 c0 -0.05 -2.11 -1.56 -3.52 -2.52 -1.30 -0.88 -3.15 -2.06 -4.66 -2.96 -1.54 -0.92 -3.77 -2.17 -3.80 -2.14 -0.04 0.04 -0.10 0.52 -0.07 0.54 0.02 0.01 0.48 0.31 1.02 0.68 3.18 2.17 6.16 4.45 8.99 6.90 l0.58 0.50 0.73 -0.48 c0.40 -0.26 0.73 -0.50 0.73 -0.51z m2.51 -1.56 c2.76 -1.69 5.64 -3.27 8.56 -4.68 1.12 -0.54 2.97 -1.39 3.66 -1.68 0.20 -0.08 0.37 -0.16 0.39 -0.18 0.02 -0.02 -0.02 -0.23 -0.09 -0.48 -0.82 -3.14 -2.78 -5.94 -5.46 -7.82 -1.90 -1.33 -4.02 -2.13 -6.44 -2.42 -0.66 -0.08 -2.50 -0.07 -3.16 0.02 -2.77 0.37 -5.21 1.43 -7.26 3.15 -0.54 0.45 -1.38 1.30 -1.81 1.82 -1.18 1.43 -2.09 3.17 -2.62 5 -0.08 0.26 -0.14 0.54 -0.15 0.61 l-0.01 0.13 1.10 0.49 c4.05 1.81 7.97 3.86 11.56 6.08 0.45 0.28 0.82 0.50 0.83 0.50 0.01 0 0.40 -0.24 0.88 -0.53z" }),
            React__default['default'].createElement("path", { d: "M15.32 18.82 c-3.27 -2.02 -7.55 -4.27 -11.24 -5.92 -0.43 -0.19 -0.79 -0.36 -0.81 -0.37 -0.03 -0.03 0.17 -0.70 0.38 -1.27 0.22 -0.58 0.77 -1.68 1.14 -2.26 1.75 -2.80 4.51 -4.86 7.64 -5.72 1.60 -0.44 3.34 -0.59 4.95 -0.42 2.37 0.25 4.63 1.14 6.54 2.58 1.95 1.47 3.44 3.42 4.35 5.69 0.20 0.52 0.44 1.24 0.44 1.35 0 0.04 -0.15 0.13 -0.47 0.27 -3.52 1.52 -8.04 3.89 -11.55 6.04 -0.37 0.22 -0.70 0.41 -0.72 0.41 -0.02 0 -0.32 -0.17 -0.66 -0.38z m1.15 -1.64 c0.59 -0.89 1.12 -2.10 1.41 -3.24 0.27 -1.07 0.33 -1.59 0.33 -2.88 0 -0.96 -0.01 -1.20 -0.09 -1.70 -0.11 -0.71 -0.34 -1.63 -0.57 -2.24 -0.32 -0.88 -0.97 -2.08 -1.45 -2.69 l-0.12 -0.15 -0.20 0.27 c-0.58 0.79 -1.12 1.87 -1.45 2.86 -0.38 1.14 -0.54 2.07 -0.57 3.32 -0.07 2.56 0.60 4.86 2 6.83 l0.21 0.29 0.11 -0.13 c0.06 -0.07 0.24 -0.31 0.38 -0.53z m-2.49 -0.67 c-0.34 -0.70 -0.59 -1.42 -0.80 -2.25 -0.12 -0.48 -0.18 -0.66 -0.20 -0.60 -0.30 0.77 -0.52 1.22 -0.84 1.70 -0.12 0.18 -0.22 0.34 -0.22 0.36 0 0.02 0.10 0.08 0.21 0.14 0.11 0.06 0.59 0.33 1.05 0.59 0.79 0.46 1.03 0.59 1.05 0.59 0 0 -0.11 -0.24 -0.25 -0.53z m4.46 0.15 c0.28 -0.16 0.75 -0.43 1.06 -0.60 0.31 -0.17 0.56 -0.32 0.57 -0.32 0.01 -0 -0.09 -0.17 -0.22 -0.36 -0.28 -0.41 -0.54 -0.93 -0.73 -1.42 -0.08 -0.20 -0.14 -0.34 -0.15 -0.34 -0.01 0.01 -0.06 0.20 -0.11 0.43 -0.19 0.81 -0.47 1.63 -0.79 2.31 -0.11 0.23 -0.23 0.48 -0.26 0.55 -0.07 0.16 -0.12 0.18 0.62 -0.25z m-7.09 -1.80 c1.26 -1.85 1.41 -4.51 0.39 -6.60 -0.22 -0.44 -0.56 -0.98 -0.64 -1.01 -0.06 -0.02 -0.48 0.62 -0.68 1.05 -0.50 1.04 -0.72 2.27 -0.62 3.44 0.05 0.56 0.17 1.19 0.33 1.65 0.20 0.59 0.87 1.82 0.98 1.79 0.02 -0.01 0.13 -0.16 0.25 -0.33z m9.81 -0.02 c1.08 -1.64 1.35 -3.84 0.71 -5.76 -0.22 -0.68 -0.84 -1.81 -0.99 -1.81 -0.15 0 -0.76 1.13 -0.99 1.84 -0.45 1.38 -0.43 3.10 0.06 4.42 0.21 0.57 0.82 1.68 0.93 1.68 0.02 0 0.14 -0.17 0.27 -0.37z m-11.81 -0.79 c-0.35 -0.89 -0.52 -1.82 -0.52 -2.83 0 -0.96 0.11 -1.67 0.41 -2.52 0.31 -0.90 0.63 -1.46 1.38 -2.42 l0.46 -0.59 0.32 0.40 c0.53 0.67 0.77 1.02 0.99 1.40 0.20 0.35 0.56 1.16 0.56 1.27 0 0.02 0.02 0.05 0.04 0.05 0.02 0 0.08 -0.18 0.12 -0.39 0.37 -1.61 1.11 -3.23 2.02 -4.42 l0.18 -0.23 -0.17 0 c-0.25 0 -1.08 0.11 -1.56 0.20 -4.10 0.81 -7.54 3.71 -9.06 7.61 -0.08 0.22 -0.14 0.41 -0.12 0.43 0.02 0.02 0.33 0.17 0.70 0.33 0.98 0.44 2.38 1.12 3.42 1.64 0.51 0.26 0.93 0.46 0.94 0.46 0.02 0 -0.04 -0.18 -0.13 -0.40z m14.64 -0.33 c1.25 -0.62 2.56 -1.24 3.40 -1.61 l0.21 -0.10 -0.10 -0.29 c-0.18 -0.49 -0.53 -1.25 -0.82 -1.76 -1.46 -2.55 -3.70 -4.45 -6.43 -5.47 -0.96 -0.36 -2.25 -0.65 -3.18 -0.71 l-0.39 -0.03 0.13 0.18 c0.99 1.32 1.65 2.74 2.05 4.40 0.07 0.28 0.12 0.50 0.13 0.51 0 0 0.06 -0.13 0.12 -0.30 0.14 -0.40 0.48 -1.09 0.70 -1.42 0.20 -0.30 1.08 -1.45 1.10 -1.43 0.30 0.36 1.08 1.42 1.24 1.69 0.94 1.60 1.25 3.64 0.84 5.50 -0.08 0.37 -0.34 1.16 -0.48 1.49 -0.02 0.04 -0.02 0.07 -0.01 0.07 0.01 0 0.68 -0.33 1.50 -0.73z" }))));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default['default'].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default['default'].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default['default'].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default['default'].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default['default'].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default['default'].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default['default'].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default['default'].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default['default'].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default['default'].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default['default'].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default['default'].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$v = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "24px", height: "24px", viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet" }, props),
        React__default['default'].createElement("g", { fill: "#ffffff" },
            React__default['default'].createElement("path", { d: "M11.34 23.51 c-0.01 -0.01 -0.15 -0.02 -0.31 -0.03 -1.03 -0.07 -2.39 -0.38 -3.27 -0.76 -1.02 -0.43 -1.14 -0.50 -1.87 -0.95 -0.56 -0.35 -0.65 -0.42 -1.18 -0.84 -1 -0.80 -1.93 -1.89 -2.67 -3.13 -0.23 -0.39 -0.70 -1.39 -0.89 -1.90 -0.25 -0.69 -0.48 -1.73 -0.60 -2.69 -0.05 -0.45 -0.08 -1.83 -0.04 -2.07 0.01 -0.08 0.05 -0.33 0.08 -0.56 0.13 -1.12 0.39 -2.10 0.86 -3.16 0.36 -0.81 0.55 -1.16 1.12 -2.01 0.49 -0.73 1.41 -1.73 2.12 -2.30 0.46 -0.37 0.75 -0.58 1.24 -0.88 1.03 -0.64 2.25 -1.16 3.35 -1.41 1.82 -0.41 3.37 -0.44 5.20 -0.06 0.95 0.19 1.82 0.50 2.84 1.01 0.44 0.22 1.32 0.77 1.66 1.04 1.27 1 2.05 1.87 2.92 3.26 0.37 0.59 0.84 1.61 1.07 2.30 0.54 1.65 0.70 3.57 0.45 5.36 -0.12 0.85 -0.47 2.17 -0.66 2.50 -0.01 0.03 -0.10 0.22 -0.18 0.41 -0.56 1.30 -1.37 2.50 -2.41 3.54 -1.02 1.02 -2.25 1.86 -3.51 2.39 -0.16 0.07 -0.35 0.15 -0.42 0.18 -0.78 0.34 -2.14 0.65 -3.31 0.74 -0.38 0.03 -1.54 0.05 -1.57 0.02z m1.95 -0.57 c1.85 -0.25 3.55 -0.91 5.03 -1.96 0.98 -0.70 1.96 -1.67 2.66 -2.66 1.05 -1.49 1.71 -3.19 1.96 -5.06 0.07 -0.51 0.08 -1.91 0.01 -2.41 -0.22 -1.83 -0.88 -3.59 -1.87 -5.03 -0.55 -0.79 -1.52 -1.85 -2.23 -2.41 -1.72 -1.36 -3.63 -2.14 -5.86 -2.39 -0.44 -0.05 -1.56 -0.05 -2 -0 -2.64 0.29 -4.94 1.39 -6.76 3.22 -1.73 1.73 -2.83 3.93 -3.16 6.35 -0.31 2.22 0.14 4.58 1.25 6.64 0.25 0.46 0.76 1.22 1.09 1.64 0.15 0.18 0.44 0.51 0.66 0.73 0.99 1.02 1.90 1.68 3.12 2.28 1.25 0.62 2.47 0.97 3.88 1.11 0.43 0.04 1.78 0.02 2.22 -0.04z" }),
            React__default['default'].createElement("path", { d: "M10.50 12.83 c-0.04 -0.02 -0.36 -0.20 -0.70 -0.40 -0.34 -0.19 -0.70 -0.40 -0.79 -0.44 -0.15 -0.08 -0.16 -0.09 -0.16 -0.19 0 -0.08 0.04 -0.17 0.17 -0.36 0.20 -0.29 0.40 -0.69 0.54 -1.05 0.10 -0.24 0.10 -0.25 0.20 -0.26 l0.10 -0.01 0.12 0.50 c0.15 0.61 0.34 1.15 0.60 1.69 0.10 0.22 0.19 0.44 0.19 0.49 0 0.08 -0.01 0.09 -0.10 0.09 -0.05 0 -0.13 -0.02 -0.17 -0.04z" }),
            React__default['default'].createElement("path", { d: "M13.23 12.77 c0 -0.06 0.06 -0.22 0.14 -0.38 0.33 -0.68 0.56 -1.34 0.75 -2.21 0.01 -0.05 0.04 -0.07 0.11 -0.07 0.10 0 0.10 0.01 0.20 0.26 0.14 0.37 0.34 0.76 0.54 1.06 0.23 0.35 0.24 0.43 0.02 0.54 -0.08 0.05 -0.47 0.27 -0.86 0.49 -0.78 0.45 -0.90 0.48 -0.90 0.30z" }),
            React__default['default'].createElement("path", { d: "M5.97 10.40 c-0.90 -0.45 -1.57 -0.77 -2.53 -1.20 -0.23 -0.10 -0.23 -0.10 -0.23 -0.22 0 -0.21 0.35 -1.03 0.69 -1.62 1.24 -2.14 3.25 -3.70 5.62 -4.34 0.58 -0.16 1.41 -0.29 1.84 -0.29 l0.22 0 0 0.09 c0 0.06 -0.04 0.15 -0.13 0.26 -0.68 0.89 -1.24 2.11 -1.52 3.31 l-0.07 0.29 -0.11 0 -0.11 0 -0.08 -0.24 c-0.10 -0.28 -0.32 -0.72 -0.50 -1 -0.11 -0.17 -0.60 -0.82 -0.72 -0.95 -0.03 -0.03 -0.58 0.68 -0.80 1.02 -0.33 0.52 -0.58 1.16 -0.72 1.83 -0.10 0.50 -0.13 1.29 -0.06 1.78 0.07 0.44 0.19 0.94 0.34 1.33 0.07 0.17 0.12 0.35 0.12 0.39 0 0.17 -0.15 0.11 -1.26 -0.44z" }),
            React__default['default'].createElement("path", { d: "M16.78 10.79 c0.01 -0.07 0.08 -0.30 0.15 -0.50 0.25 -0.70 0.37 -1.44 0.34 -2.09 -0.05 -0.92 -0.31 -1.83 -0.76 -2.58 -0.12 -0.21 -0.66 -0.94 -0.82 -1.13 -0.02 -0.03 -0.52 0.59 -0.75 0.94 -0.17 0.25 -0.42 0.76 -0.52 1.06 -0.08 0.22 -0.09 0.23 -0.18 0.23 l-0.10 0 -0.07 -0.29 c-0.27 -1.19 -0.76 -2.27 -1.46 -3.24 -0.14 -0.20 -0.19 -0.30 -0.19 -0.37 l0 -0.10 0.37 0.02 c0.72 0.04 1.71 0.25 2.48 0.54 2.02 0.75 3.68 2.15 4.78 4.03 0.33 0.57 0.74 1.50 0.74 1.70 0 0.08 -0.02 0.10 -0.16 0.16 -0.63 0.28 -1.61 0.75 -2.55 1.21 -0.80 0.40 -1.13 0.55 -1.21 0.55 l-0.10 0 0.01 -0.13z" })),
        React__default['default'].createElement("g", { fill: "#ffcf4b" },
            React__default['default'].createElement("path", { d: "M11.58 13.02 c-0.62 -0.93 -1.04 -2.01 -1.23 -3.14 -0.10 -0.61 -0.13 -1.07 -0.11 -1.83 0.02 -1.03 0.13 -1.68 0.43 -2.59 0.18 -0.55 0.55 -1.33 0.84 -1.78 0.16 -0.24 0.18 -0.26 0.27 -0.26 0.07 0 0.11 0.02 0.16 0.08 0.13 0.18 0.45 0.66 0.52 0.79 0.04 0.08 0.08 0.14 0.09 0.15 0.04 0.03 0.24 0.46 0.24 0.50 0 0.02 0.01 0.04 0.03 0.04 0.02 0 0.03 0.02 0.03 0.05 0 0.03 0.02 0.08 0.05 0.11 0.02 0.03 0.05 0.08 0.05 0.10 0 0.02 0.03 0.11 0.07 0.19 0.19 0.40 0.40 1.30 0.47 1.98 0.05 0.47 0.02 1.69 -0.05 2.12 -0.20 1.27 -0.58 2.38 -1.19 3.45 -0.21 0.37 -0.22 0.39 -0.31 0.39 -0.09 0 -0.11 -0.02 -0.34 -0.36z" }),
            React__default['default'].createElement("path", { d: "M8.01 11.20 c-0.55 -0.84 -0.82 -1.92 -0.77 -3.04 0.04 -0.87 0.22 -1.56 0.60 -2.24 l0.15 -0.28 0.12 0.01 c0.12 0.01 0.13 0.02 0.28 0.26 0.09 0.14 0.19 0.33 0.23 0.42 0.04 0.09 0.10 0.20 0.12 0.25 0.02 0.04 0.04 0.10 0.04 0.14 0 0.03 0.01 0.07 0.03 0.08 0.05 0.05 0.17 0.51 0.23 0.84 0.07 0.42 0.08 1.50 0 1.90 -0.10 0.59 -0.29 1.13 -0.56 1.60 -0.14 0.24 -0.16 0.26 -0.24 0.26 -0.09 0 -0.11 -0.02 -0.23 -0.20z" }),
            React__default['default'].createElement("path", { d: "M15.37 11.21 c-0.56 -0.85 -0.83 -1.92 -0.78 -3.04 0.04 -0.89 0.23 -1.60 0.62 -2.29 0.13 -0.24 0.14 -0.25 0.25 -0.25 0.10 0 0.12 0.01 0.25 0.21 0.08 0.12 0.14 0.22 0.14 0.24 0 0.01 0.03 0.05 0.06 0.09 0.03 0.04 0.07 0.11 0.08 0.16 0.01 0.05 0.03 0.09 0.04 0.10 0.01 0.01 0.03 0.04 0.03 0.08 0 0.03 0.01 0.06 0.03 0.06 0.02 0 0.03 0.03 0.03 0.06 0 0.04 0.02 0.09 0.05 0.13 0.06 0.09 0.21 0.70 0.26 1.03 0.05 0.34 0.05 1.33 -0 1.65 -0.10 0.62 -0.32 1.26 -0.59 1.73 -0.13 0.22 -0.15 0.24 -0.24 0.24 -0.08 0 -0.11 -0.02 -0.22 -0.19z" })),
        React__default['default'].createElement("g", { fill: "#f8ac3c" },
            React__default['default'].createElement("path", { d: "M11.87 13.42 c-0.01 -0.03 -0.02 -0.09 -0.02 -0.14 0 -0.09 0 -0.09 0.05 -0.03 0.03 0.05 0.05 0.05 0.05 0.01 0 -0.02 0 -0.05 0 -0.07 0 -0.01 0.01 -0.02 0.03 -0.02 0.01 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 0 -0.04 0.03 -0.05 0.02 -0.01 0.04 -0.03 0.03 -0.05 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.03 -0.01 0.02 -0.03 -0.01 -0.01 0 -0.04 0.03 -0.05 0.02 -0.01 0.04 -0.03 0.03 -0.05 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.04 0 0.34 -0.59 0.32 -0.63 -0.01 -0.02 -0 -0.03 0.01 -0.03 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0 -0.03 0.02 -0.03 0.02 0 0.03 -0.01 0.02 -0.02 -0.01 -0.01 0 -0.04 0.03 -0.06 0.02 -0.03 0.04 -0.06 0.03 -0.08 -0.01 -0.02 0.01 -0.05 0.03 -0.08 0.02 -0.02 0.04 -0.06 0.03 -0.08 -0.01 -0.02 -0 -0.04 0.01 -0.04 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.03 -0.02 0.02 -0.04 -0.01 -0.02 0.01 -0.06 0.03 -0.08 0.02 -0.02 0.04 -0.06 0.03 -0.08 -0.01 -0.02 -0 -0.04 0.01 -0.04 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 0 -0.05 0.01 -0.05 0.02 0 0.03 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.01 -0.06 0.02 0 0.02 -0.02 0.01 -0.05 -0.01 -0.02 0 -0.05 0.01 -0.05 0.02 0 0.03 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.01 -0.06 0.01 0 0.02 -0.03 0.01 -0.06 -0.01 -0.04 -0.01 -0.06 0.01 -0.06 0.02 0 0.03 -0.02 0.01 -0.06 -0.01 -0.04 -0.01 -0.06 0.01 -0.06 0.02 0 0.03 -0.02 0.02 -0.06 -0.01 -0.03 -0 -0.07 0.01 -0.08 0.01 -0.01 0.02 -0.04 0.01 -0.06 -0.01 -0.03 -0 -0.07 0.01 -0.09 0.02 -0.02 0.02 -0.05 0.01 -0.07 -0.01 -0.01 -0.01 -0.05 0.01 -0.07 0.01 -0.02 0.03 -0.07 0.03 -0.11 0.01 -0.12 0.03 -0.22 0.04 -0.25 0.01 -0.03 0.01 -0.06 0.05 -0.39 0.02 -0.24 0.02 -1.39 -0 -1.62 -0.04 -0.31 -0.06 -0.47 -0.09 -0.62 -0.03 -0.14 -0.05 -0.25 -0.05 -0.30 0 -0.02 -0.01 -0.06 -0.03 -0.08 -0.01 -0.02 -0.02 -0.05 -0.01 -0.07 0.01 -0.01 0 -0.04 -0.01 -0.05 -0.01 -0.01 -0.02 -0.04 -0.01 -0.06 0.01 -0.02 0.01 -0.05 -0.01 -0.06 -0.01 -0.01 -0.02 -0.04 -0.03 -0.06 -0.01 -0.08 -0.03 -0.15 -0.04 -0.16 -0.01 -0.01 -0.01 -0.02 -0.01 -0.04 -0 -0.01 -0.01 -0.04 -0.01 -0.05 -0 -0.01 -0.01 -0.03 -0.01 -0.05 -0 -0.01 -0.01 -0.04 -0.01 -0.05 -0 -0.01 -0.01 -0.03 -0.01 -0.05 -0 -0.01 -0.01 -0.04 -0.01 -0.05 -0 -0.01 -0.01 -0.03 -0.01 -0.05 -0 -0.01 -0.01 -0.04 -0.01 -0.05 -0 -0.01 -0.01 -0.02 -0.01 -0.04 -0 -0.01 -0.03 -0.08 -0.06 -0.14 -0.03 -0.06 -0.06 -0.14 -0.07 -0.17 -0.01 -0.03 -0.03 -0.09 -0.06 -0.13 -0.03 -0.04 -0.04 -0.08 -0.03 -0.09 0.01 -0.01 0 -0.02 -0.01 -0.02 -0.02 0 -0.04 -0.04 -0.05 -0.09 -0.01 -0.05 -0.06 -0.16 -0.12 -0.25 -0.05 -0.09 -0.09 -0.17 -0.08 -0.17 0.01 0 0.01 -0.01 -0.01 -0.02 -0.02 -0.01 -0.06 -0.08 -0.10 -0.16 -0.07 -0.13 -0.38 -0.61 -0.52 -0.79 -0.06 -0.08 -0.06 -0.08 -0.10 -0.03 -0.03 0.05 -0.04 0.04 -0.04 -0.06 0 -0.17 0.16 -0.38 0.29 -0.38 0.11 0 0.16 0.06 0.49 0.56 0.26 0.40 0.61 1.10 0.78 1.58 0.17 0.46 0.34 1.15 0.43 1.68 0.06 0.38 0.07 0.55 0.07 1.36 0 0.82 -0.01 0.98 -0.07 1.36 -0.21 1.34 -0.73 2.64 -1.42 3.58 -0.16 0.21 -0.18 0.23 -0.28 0.23 -0.07 0 -0.11 -0.02 -0.12 -0.05z" }),
            React__default['default'].createElement("path", { d: "M8.18 11.44 c-0.01 -0.03 -0.02 -0.09 -0.02 -0.14 0 -0.09 0.01 -0.09 0.05 -0.04 0.04 0.05 0.04 0.05 0.08 -0.01 0.02 -0.04 0.02 -0.06 0.01 -0.06 -0.01 0 0 -0.01 0.03 -0.03 0.03 -0.02 0.05 -0.04 0.04 -0.06 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0.01 -0.03 0.01 -0.03 0.04 0 0.16 -0.23 0.14 -0.27 -0.01 -0.02 -0 -0.03 0.02 -0.03 0.02 0 0.03 -0.01 0.02 -0.02 -0.01 -0.01 0 -0.04 0.03 -0.06 0.02 -0.03 0.04 -0.07 0.03 -0.09 -0.01 -0.02 -0 -0.04 0.01 -0.04 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.03 -0.02 0.02 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.02 -0.05 -0.01 -0.02 -0.01 -0.05 0.01 -0.06 0.02 -0.01 0.02 -0.04 0.01 -0.06 -0.01 -0.02 0 -0.04 0.01 -0.04 0.02 0 0.03 -0.03 0.02 -0.06 -0.01 -0.03 -0 -0.06 0.01 -0.06 0.02 0 0.02 -0.03 0.01 -0.06 -0.01 -0.03 -0 -0.07 0.01 -0.08 0.01 -0.01 0.03 -0.05 0.03 -0.08 0 -0.04 0.01 -0.11 0.01 -0.17 0.04 -0.21 0.05 -0.44 0.05 -0.80 0 -0.41 -0.02 -0.69 -0.08 -0.99 -0.01 -0.05 -0.02 -0.11 -0.02 -0.14 0 -0.02 -0.01 -0.06 -0.03 -0.08 -0.01 -0.02 -0.02 -0.05 -0.01 -0.07 0.01 -0.01 0.01 -0.04 -0.01 -0.05 -0.02 -0.01 -0.02 -0.03 -0.01 -0.05 0.01 -0.01 0 -0.05 -0.02 -0.07 -0.02 -0.02 -0.03 -0.05 -0.01 -0.05 0.01 0 0.01 -0.02 -0.01 -0.05 -0.02 -0.02 -0.03 -0.05 -0.01 -0.05 0.01 0 0.01 -0.02 -0.01 -0.05 -0.02 -0.02 -0.03 -0.05 -0.01 -0.05 0.01 0 0.01 -0.02 -0.01 -0.04 -0.02 -0.02 -0.04 -0.07 -0.05 -0.12 -0.01 -0.04 -0.04 -0.12 -0.07 -0.16 -0.03 -0.05 -0.05 -0.09 -0.05 -0.10 0.01 -0.05 -0.38 -0.73 -0.44 -0.77 -0.01 -0.01 -0.05 0.01 -0.07 0.04 -0.04 0.05 -0.04 0.05 -0.05 -0.05 0 -0.07 0.03 -0.15 0.10 -0.25 0.09 -0.14 0.10 -0.14 0.22 -0.14 0.11 0.01 0.13 0.02 0.26 0.22 0.19 0.28 0.45 0.80 0.56 1.15 0.49 1.51 0.27 3.31 -0.55 4.52 -0.16 0.23 -0.17 0.24 -0.28 0.25 -0.09 0.01 -0.13 -0 -0.14 -0.04z" }),
            React__default['default'].createElement("path", { d: "M15.53 11.44 c-0.01 -0.03 -0.02 -0.09 -0.02 -0.14 0 -0.09 0.01 -0.09 0.04 -0.04 0.04 0.05 0.04 0.05 0.06 0 0.01 -0.03 0.02 -0.06 0.02 -0.07 0 -0.01 0.02 -0.03 0.05 -0.04 0.02 -0.01 0.04 -0.04 0.03 -0.05 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0 -0.03 0.01 -0.03 0.02 0 0.02 -0.01 0.01 -0.03 -0.01 -0.01 -0.01 -0.03 0.01 -0.03 0.04 0 0.16 -0.23 0.14 -0.27 -0.01 -0.02 -0 -0.03 0.02 -0.03 0.02 0 0.03 -0.01 0.02 -0.02 -0.01 -0.01 0 -0.04 0.03 -0.06 0.02 -0.03 0.04 -0.06 0.03 -0.08 -0.01 -0.02 0.01 -0.05 0.03 -0.08 0.02 -0.02 0.04 -0.06 0.03 -0.08 -0.01 -0.02 -0 -0.04 0.01 -0.04 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.01 -0.05 -0.01 -0.02 -0 -0.05 0.01 -0.05 0.02 0 0.03 -0.02 0.02 -0.05 -0.01 -0.02 -0.01 -0.05 0.01 -0.06 0.02 -0.01 0.02 -0.04 0.01 -0.06 -0.01 -0.02 -0 -0.05 0.01 -0.06 0.02 -0.01 0.02 -0.04 0.01 -0.06 -0.01 -0.02 -0 -0.05 0.01 -0.06 0.02 -0.01 0.02 -0.04 0.01 -0.06 -0.01 -0.02 0 -0.05 0.01 -0.06 0.02 -0.01 0.02 -0.05 0.01 -0.09 -0.01 -0.04 -0.01 -0.08 0.01 -0.09 0.01 -0.01 0.03 -0.05 0.03 -0.10 0 -0.05 0.01 -0.17 0.02 -0.28 0.05 -0.43 0.02 -1.03 -0.06 -1.45 -0.01 -0.05 -0.02 -0.11 -0.03 -0.15 -0.01 -0.04 -0.02 -0.10 -0.03 -0.14 -0.01 -0.04 -0.02 -0.10 -0.03 -0.12 -0.01 -0.02 -0.01 -0.05 -0.01 -0.05 -0.01 -0.01 -0.01 -0.02 -0.01 -0.04 -0 -0.01 -0.01 -0.04 -0.01 -0.05 -0 -0.01 -0.01 -0.04 -0 -0.05 0 -0.01 -0.01 -0.04 -0.03 -0.07 -0.02 -0.02 -0.03 -0.04 -0.01 -0.04 0.01 0 -0.01 -0.05 -0.04 -0.11 -0.03 -0.06 -0.05 -0.12 -0.04 -0.14 0.01 -0.01 0 -0.02 -0.01 -0.02 -0.02 0 -0.03 -0.02 -0.03 -0.05 0 -0.03 -0.02 -0.08 -0.05 -0.11 -0.02 -0.03 -0.04 -0.07 -0.03 -0.08 0.01 -0.01 0 -0.03 -0.02 -0.03 -0.02 0 -0.02 -0.01 -0.01 -0.03 0.01 -0.01 0 -0.03 -0.01 -0.03 -0.02 0 -0.02 -0.01 -0.01 -0.03 0.01 -0.01 0.01 -0.03 -0.01 -0.03 -0.01 0 -0.04 -0.03 -0.05 -0.06 -0.02 -0.06 -0.23 -0.40 -0.29 -0.46 -0.02 -0.02 -0.05 -0.01 -0.07 0.03 -0.04 0.05 -0.04 0.05 -0.05 -0.05 0 -0.08 0.03 -0.15 0.10 -0.25 0.09 -0.13 0.10 -0.14 0.22 -0.13 0.11 0.01 0.13 0.02 0.26 0.22 0.08 0.12 0.22 0.36 0.31 0.54 0.78 1.60 0.67 3.67 -0.28 5.11 -0.18 0.27 -0.18 0.28 -0.30 0.28 -0.08 0 -0.12 -0.01 -0.14 -0.05z" })),
        React__default['default'].createElement("g", { fill: "#6eb260" },
            React__default['default'].createElement("path", { d: "M11.31 22.47 c-0.17 -0.01 -0.37 -0.02 -0.43 -0.03 -0.11 -0 -0.11 -0.01 -0.11 -0.10 0 -0.08 0.08 -0.19 0.52 -0.73 1.60 -1.95 3.07 -3.57 4.93 -5.43 1.85 -1.85 3.57 -3.41 5.47 -4.96 0.45 -0.37 0.57 -0.45 0.65 -0.45 l0.09 0 0.02 0.20 c0.01 0.11 0.02 0.26 0.02 0.34 l0 0.14 -1 1 c-2.98 3 -5.59 6.08 -7.94 9.41 l-0.41 0.57 -0.15 0.02 c-0.27 0.03 -1.34 0.04 -1.66 0.02z" }),
            React__default['default'].createElement("path", { d: "M8.41 21.89 c-0.44 -0.16 -0.79 -0.31 -1.22 -0.53 -0.40 -0.20 -0.41 -0.21 -0.41 -0.30 0 -0.10 0.02 -0.13 0.99 -1 4.22 -3.80 8.91 -7.12 13.97 -9.90 0.25 -0.14 0.40 -0.20 0.47 -0.20 l0.10 0 0.04 0.21 c0.06 0.37 0.12 0.30 -0.70 0.86 -3.13 2.12 -6.15 4.52 -9.08 7.26 -0.77 0.72 -2.60 2.54 -3.22 3.22 -0.52 0.56 -0.48 0.55 -0.93 0.38z" }),
            React__default['default'].createElement("path", { d: "M15.15 21.87 c0 -0.11 0.14 -0.34 0.88 -1.51 1.71 -2.69 3.69 -5.40 5.84 -7.96 0.39 -0.47 0.41 -0.48 0.52 -0.49 l0.12 0 -0.02 0.49 -0.02 0.49 -0.23 0.33 c-1.71 2.51 -3.04 4.66 -4.29 6.99 -0.45 0.83 -0.38 0.76 -1.15 1.15 -0.60 0.30 -1.29 0.58 -1.49 0.60 l-0.16 0.01 0 -0.10z" }),
            React__default['default'].createElement("path", { d: "M5.30 18.85 c-1.02 -1.80 -2.44 -4.04 -3.53 -5.62 l-0.24 -0.34 -0.02 -0.49 -0.01 -0.49 0.11 0 c0.10 0 0.13 0.02 0.63 0.62 1.51 1.80 2.85 3.56 4.11 5.38 0.38 0.54 0.44 0.66 0.44 0.75 -0 0.10 -0.02 0.12 -0.46 0.46 -0.39 0.29 -0.48 0.35 -0.57 0.35 l-0.10 0 -0.35 -0.62z" }),
            React__default['default'].createElement("path", { d: "M6.95 17.32 c-1.39 -1.69 -2.91 -3.34 -4.56 -4.99 l-0.86 -0.86 0 -0.23 c0 -0.13 0.01 -0.28 0.02 -0.34 0.02 -0.10 0.03 -0.11 0.11 -0.11 0.08 0 0.20 0.09 0.68 0.48 1.66 1.37 2.90 2.47 4.60 4.10 1.27 1.22 1.79 1.77 1.79 1.89 0 0.08 -0.05 0.12 -0.49 0.44 -0.41 0.29 -0.51 0.35 -0.59 0.35 -0.10 -0 -0.13 -0.04 -0.70 -0.71z" }),
            React__default['default'].createElement("path", { d: "M9.15 16.24 c-2.06 -1.78 -4.34 -3.54 -6.73 -5.17 -0.39 -0.27 -0.74 -0.50 -0.76 -0.50 -0.04 -0.01 -0.05 -0.05 -0.03 -0.25 0.03 -0.34 0.04 -0.36 0.16 -0.36 0.10 0 0.50 0.21 1.68 0.88 2.41 1.38 4.60 2.79 6.86 4.44 0.52 0.38 0.53 0.39 0.53 0.50 -0 0.11 -0.01 0.11 -0.56 0.48 -0.38 0.25 -0.58 0.37 -0.64 0.37 -0.06 -0 -0.19 -0.10 -0.52 -0.38z" }),
            React__default['default'].createElement("path", { d: "M11.28 14.71 c-2.69 -1.66 -5.64 -3.21 -8.67 -4.56 l-0.82 -0.37 0 -0.19 c0.01 -0.37 0.36 -1.40 0.74 -2.20 0.53 -1.10 1.10 -1.90 1.95 -2.77 1.67 -1.71 3.74 -2.73 6.18 -3.06 0.50 -0.07 2.05 -0.08 2.55 -0.01 2.09 0.25 3.88 1.01 5.47 2.31 0.38 0.31 1.08 1 1.39 1.37 1 1.21 1.71 2.60 2.08 4.06 0.12 0.49 0.16 0.44 -0.54 0.75 -3.07 1.35 -6.05 2.91 -8.87 4.64 -0.49 0.30 -0.68 0.40 -0.75 0.40 -0.08 0 -0.26 -0.10 -0.71 -0.38z m1.52 -0.93 c2.61 -1.57 5.45 -3.05 8.07 -4.21 0.28 -0.12 0.52 -0.23 0.53 -0.25 0.03 -0.03 -0.10 -0.42 -0.28 -0.89 -0.96 -2.41 -2.83 -4.36 -5.19 -5.40 -2.57 -1.14 -5.40 -1.12 -7.96 0.05 -2.48 1.13 -4.40 3.26 -5.26 5.84 -0.08 0.23 -0.12 0.39 -0.10 0.41 0.01 0.01 0.28 0.14 0.58 0.27 2.68 1.18 5.92 2.89 8.36 4.39 0.23 0.14 0.43 0.25 0.44 0.25 0.02 0 0.38 -0.21 0.81 -0.47z" })),
        React__default['default'].createElement("g", { fill: "#0f5f54" },
            React__default['default'].createElement("path", { d: "M10.98 23.07 c-1.41 -0.14 -2.63 -0.49 -3.88 -1.11 -1.22 -0.60 -2.13 -1.27 -3.12 -2.28 -0.87 -0.90 -1.59 -1.96 -2.11 -3.11 -1.26 -2.78 -1.31 -5.98 -0.15 -8.80 1.02 -2.47 2.94 -4.53 5.33 -5.73 1.18 -0.59 2.47 -0.96 3.86 -1.12 0.44 -0.05 1.74 -0.05 2.17 0 2.24 0.25 4.15 1.03 5.86 2.39 0.70 0.56 1.68 1.62 2.23 2.41 0.99 1.44 1.65 3.20 1.87 5.03 0.06 0.52 0.05 2.09 -0.01 2.60 -0.25 1.87 -0.91 3.58 -1.96 5.06 -0.70 0.98 -1.67 1.96 -2.66 2.66 -1.48 1.05 -3.18 1.71 -5.03 1.96 -0.44 0.06 -1.95 0.08 -2.40 0.04z m1.89 -0.70 l0.17 -0.02 0.41 -0.57 c2.35 -3.32 4.96 -6.42 7.94 -9.41 l1 -1 -0.03 -0.25 -0.02 -0.25 -0.56 0.45 c-2.96 2.41 -5.92 5.25 -8.45 8.11 -1.20 1.35 -2.50 2.91 -2.43 2.93 0.26 0.05 1.52 0.07 1.97 0.02z m-3.51 -1.06 c0.73 -0.77 2.31 -2.36 3.12 -3.11 2.90 -2.72 5.94 -5.14 9.08 -7.26 0.56 -0.37 0.73 -0.51 0.72 -0.54 -0.01 -0.03 -0.02 -0.11 -0.04 -0.19 -0.01 -0.08 -0.03 -0.14 -0.03 -0.14 -0.05 0 -1.85 1.01 -2.83 1.60 -4.38 2.62 -8.60 5.78 -12.28 9.19 l-0.23 0.22 0.41 0.21 c0.53 0.27 1.45 0.65 1.51 0.63 0.01 -0 0.27 -0.27 0.57 -0.59z m6.46 0.37 c0.44 -0.17 1.25 -0.57 1.50 -0.74 0.14 -0.09 0.17 -0.15 0.53 -0.82 1.25 -2.33 2.53 -4.40 4.29 -6.99 l0.22 -0.33 0.02 -0.40 c0.01 -0.22 0.01 -0.40 -0.01 -0.40 -0.05 0 -1.36 1.60 -2.24 2.73 -1.71 2.19 -3.44 4.70 -4.85 7.03 l-0.07 0.12 0.09 -0.02 c0.05 -0.01 0.28 -0.10 0.51 -0.19z m-9.60 -2.64 c0.25 -0.19 0.46 -0.35 0.47 -0.36 0.05 -0.04 -1.82 -2.62 -2.90 -4.01 -0.70 -0.90 -2.14 -2.65 -2.18 -2.65 -0.01 0 -0.01 0.18 0 0.41 l0.02 0.40 0.24 0.34 c1.10 1.57 2.51 3.82 3.53 5.61 0.19 0.34 0.36 0.62 0.37 0.62 0.01 0 0.22 -0.16 0.47 -0.35z m1.95 -1.45 l0.47 -0.34 -0.42 -0.44 c-0.43 -0.45 -2 -1.97 -2.74 -2.66 -0.99 -0.91 -2.14 -1.91 -3.22 -2.80 -0.66 -0.54 -0.62 -0.53 -0.63 -0.14 l-0 0.17 0.86 0.86 c1.66 1.65 3.17 3.31 4.56 4.99 0.33 0.39 0.61 0.70 0.62 0.70 0.02 -0.01 0.24 -0.16 0.50 -0.35z m2.60 -1.80 c0 -0.04 -1.58 -1.17 -2.64 -1.89 -0.98 -0.66 -2.36 -1.54 -3.49 -2.22 -1.15 -0.69 -2.83 -1.63 -2.85 -1.61 -0.03 0.03 -0.08 0.39 -0.05 0.40 0.01 0.01 0.36 0.23 0.76 0.51 2.39 1.63 4.62 3.34 6.74 5.18 l0.44 0.37 0.55 -0.36 c0.30 -0.20 0.55 -0.37 0.55 -0.38z m1.88 -1.17 c2.07 -1.27 4.23 -2.45 6.42 -3.51 0.84 -0.41 2.23 -1.04 2.75 -1.26 0.15 -0.06 0.28 -0.12 0.29 -0.13 0.01 -0.01 -0.02 -0.17 -0.07 -0.36 -0.62 -2.36 -2.08 -4.45 -4.10 -5.87 -1.42 -1 -3.02 -1.60 -4.83 -1.82 -0.49 -0.06 -1.88 -0.05 -2.37 0.01 -2.08 0.28 -3.91 1.07 -5.45 2.36 -0.40 0.34 -1.03 0.98 -1.36 1.37 -0.88 1.07 -1.57 2.38 -1.96 3.75 -0.06 0.20 -0.11 0.41 -0.11 0.46 l-0.01 0.10 0.82 0.37 c3.04 1.36 5.98 2.90 8.67 4.56 0.34 0.21 0.62 0.38 0.62 0.38 0.01 0 0.30 -0.18 0.66 -0.40z" }),
            React__default['default'].createElement("path", { d: "M11.49 14.11 c-2.45 -1.52 -5.66 -3.20 -8.43 -4.44 -0.32 -0.14 -0.59 -0.27 -0.61 -0.28 -0.02 -0.02 0.13 -0.52 0.29 -0.95 0.17 -0.44 0.58 -1.26 0.85 -1.70 1.31 -2.10 3.38 -3.64 5.73 -4.29 1.20 -0.33 2.50 -0.44 3.71 -0.31 1.78 0.19 3.47 0.86 4.91 1.93 1.46 1.10 2.58 2.57 3.26 4.27 0.15 0.39 0.33 0.93 0.33 1.01 0 0.03 -0.11 0.10 -0.35 0.20 -2.64 1.14 -6.03 2.92 -8.66 4.53 -0.28 0.17 -0.52 0.31 -0.54 0.31 -0.02 0 -0.24 -0.13 -0.50 -0.28z m0.86 -1.23 c0.44 -0.67 0.84 -1.58 1.06 -2.43 0.20 -0.80 0.25 -1.19 0.25 -2.16 0 -0.72 -0.01 -0.90 -0.07 -1.27 -0.08 -0.53 -0.26 -1.22 -0.43 -1.68 -0.24 -0.66 -0.73 -1.56 -1.09 -2.02 l-0.09 -0.11 -0.15 0.20 c-0.43 0.59 -0.84 1.40 -1.09 2.14 -0.28 0.86 -0.40 1.55 -0.43 2.49 -0.05 1.92 0.45 3.64 1.50 5.12 l0.16 0.22 0.08 -0.10 c0.05 -0.05 0.18 -0.23 0.28 -0.40z m-1.87 -0.50 c-0.25 -0.53 -0.44 -1.07 -0.60 -1.69 -0.09 -0.36 -0.14 -0.49 -0.15 -0.45 -0.22 0.58 -0.39 0.92 -0.63 1.27 -0.09 0.14 -0.17 0.26 -0.17 0.27 0 0.01 0.07 0.06 0.16 0.10 0.08 0.05 0.44 0.25 0.79 0.44 0.59 0.34 0.77 0.44 0.79 0.44 0 0 -0.08 -0.18 -0.19 -0.40z m3.35 0.11 c0.21 -0.12 0.56 -0.32 0.80 -0.45 0.23 -0.13 0.42 -0.24 0.43 -0.24 0.01 -0 -0.07 -0.13 -0.17 -0.27 -0.21 -0.31 -0.41 -0.70 -0.55 -1.07 -0.06 -0.15 -0.10 -0.26 -0.11 -0.25 -0.01 0.01 -0.05 0.15 -0.08 0.32 -0.14 0.61 -0.35 1.22 -0.59 1.73 -0.08 0.17 -0.17 0.36 -0.19 0.41 -0.05 0.12 -0.09 0.14 0.47 -0.19z m-5.32 -1.35 c0.94 -1.39 1.06 -3.38 0.29 -4.95 -0.16 -0.33 -0.42 -0.74 -0.48 -0.76 -0.05 -0.01 -0.36 0.47 -0.51 0.79 -0.38 0.78 -0.54 1.70 -0.47 2.58 0.04 0.42 0.13 0.89 0.25 1.24 0.15 0.44 0.65 1.37 0.74 1.34 0.01 -0.01 0.10 -0.12 0.19 -0.25z m7.36 -0.02 c0.81 -1.23 1.01 -2.88 0.53 -4.32 -0.17 -0.51 -0.63 -1.36 -0.74 -1.36 -0.11 0 -0.57 0.85 -0.74 1.38 -0.34 1.03 -0.32 2.32 0.05 3.32 0.16 0.43 0.62 1.26 0.70 1.26 0.01 0 0.10 -0.13 0.20 -0.28z m-8.86 -0.59 c-0.26 -0.67 -0.39 -1.36 -0.39 -2.12 0 -0.72 0.08 -1.25 0.31 -1.89 0.23 -0.67 0.47 -1.09 1.03 -1.82 l0.35 -0.44 0.24 0.30 c0.40 0.50 0.58 0.76 0.74 1.05 0.15 0.26 0.42 0.87 0.42 0.95 0 0.02 0.01 0.04 0.03 0.04 0.01 0 0.06 -0.13 0.09 -0.29 0.28 -1.21 0.83 -2.42 1.52 -3.32 l0.14 -0.17 -0.13 0 c-0.19 0 -0.81 0.08 -1.17 0.15 -3.08 0.61 -5.66 2.78 -6.79 5.71 -0.06 0.17 -0.10 0.31 -0.09 0.32 0.01 0.01 0.25 0.13 0.52 0.25 0.74 0.33 1.79 0.84 2.57 1.23 0.38 0.19 0.70 0.35 0.71 0.35 0.01 0 -0.03 -0.13 -0.10 -0.30z m10.98 -0.25 c0.94 -0.47 1.92 -0.93 2.55 -1.21 l0.16 -0.07 -0.08 -0.22 c-0.13 -0.37 -0.40 -0.94 -0.62 -1.32 -1.09 -1.91 -2.77 -3.34 -4.82 -4.10 -0.72 -0.27 -1.69 -0.49 -2.39 -0.53 l-0.29 -0.02 0.10 0.13 c0.74 0.99 1.24 2.06 1.54 3.30 0.05 0.21 0.09 0.38 0.10 0.38 0 0 0.05 -0.10 0.09 -0.22 0.10 -0.30 0.36 -0.82 0.52 -1.06 0.15 -0.22 0.81 -1.09 0.82 -1.07 0.23 0.27 0.81 1.07 0.93 1.27 0.71 1.20 0.94 2.73 0.63 4.13 -0.06 0.28 -0.25 0.87 -0.36 1.12 -0.01 0.03 -0.01 0.05 -0.01 0.05 0.01 0 0.51 -0.25 1.12 -0.55z" }))));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "24px", height: "24px", viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet" }, props),
        React__default['default'].createElement("g", { fill: "#0f5f54" },
            React__default['default'].createElement("path", { d: "M9.27 12.48 l-0.60 -0.60 0 -0.25 c0 -0.14 0.01 -0.30 0.03 -0.37 0.04 -0.16 1.11 -0.94 1.29 -0.94 0.19 0 0.90 0.34 1.38 0.67 0.39 0.26 0.44 0.30 0.44 0.44 0 0.11 -0.03 0.16 -0.13 0.21 -0.08 0.04 -0.15 0.09 -0.17 0.12 -0.02 0.03 -0.07 0.06 -0.10 0.06 -0.04 0 -0.08 0.03 -0.09 0.07 -0.01 0.04 -0.06 0.07 -0.10 0.07 -0.04 0 -0.07 0.02 -0.07 0.05 0 0.03 -0.03 0.05 -0.07 0.05 -0.04 0 -0.08 0.03 -0.09 0.07 -0.01 0.04 -0.06 0.07 -0.09 0.07 -0.03 0 -0.08 0.03 -0.09 0.07 -0.01 0.04 -0.06 0.07 -0.09 0.07 -0.03 0 -0.08 0.03 -0.09 0.07 -0.01 0.04 -0.05 0.07 -0.08 0.07 -0.09 0 -0.37 0.39 -0.37 0.51 0 0.08 -0.03 0.10 -0.15 0.10 -0.14 0 -0.22 -0.07 -0.75 -0.60z" }),
            React__default['default'].createElement("path", { d: "M7.95 9.76 c-0.49 -1 -1.12 -1.55 -2.02 -1.80 -0.56 -0.15 -0.73 -0.35 -0.73 -0.86 0 -0.25 0.02 -0.33 0.13 -0.48 0.42 -0.58 1.68 -1.42 2.54 -1.70 1.05 -0.34 2.15 -0.37 3.30 -0.09 l0.41 0.10 0 0.16 c0 0.14 -0.05 0.22 -0.33 0.51 -1 1.06 -1.97 2.52 -2.56 3.90 -0.26 0.60 -0.28 0.62 -0.41 0.62 -0.13 0 -0.16 -0.03 -0.32 -0.36z" })),
        React__default['default'].createElement("g", { fill: "#248175" },
            React__default['default'].createElement("path", { d: "M16.66 18.94 c-0.21 -0.13 -0.33 -0.30 -0.37 -0.53 -0.08 -0.51 -0.43 -1.11 -0.90 -1.54 -0.26 -0.23 -0.82 -0.58 -1.13 -0.70 -0.14 -0.05 -0.15 -0.08 -0.14 -0.22 0.01 -0.16 0.02 -0.16 0.58 -0.40 1.33 -0.57 2.65 -1.43 3.82 -2.48 0.37 -0.33 0.47 -0.40 0.60 -0.40 0.17 0 0.20 0.05 0.32 0.54 0.28 1.19 0.13 2.66 -0.38 3.76 -0.33 0.71 -1.20 1.83 -1.54 1.99 -0.23 0.11 -0.67 0.10 -0.86 -0.01z" }),
            React__default['default'].createElement("path", { d: "M12.26 15.47 c-0.08 -0.05 -0.64 -0.59 -1.25 -1.21 -0.99 -1.01 -1.12 -1.14 -1.12 -1.28 0 -0.13 0.01 -0.15 0.07 -0.09 0.06 0.05 0.07 0.04 0.07 -0.06 0 -0.06 0.02 -0.14 0.06 -0.17 0.03 -0.03 0.04 -0.06 0.03 -0.06 -0.05 0 0.23 -0.27 0.31 -0.30 0.04 -0.02 0.07 -0.05 0.07 -0.08 0 -0.02 0.03 -0.05 0.07 -0.05 0.04 0 0.08 -0.03 0.10 -0.07 0.02 -0.04 0.06 -0.07 0.09 -0.07 0.04 0 0.08 -0.03 0.09 -0.07 0.02 -0.04 0.06 -0.07 0.09 -0.07 0.04 0 0.07 -0.02 0.07 -0.05 0 -0.02 0.03 -0.05 0.07 -0.05 0.04 0 0.08 -0.03 0.10 -0.07 0.02 -0.04 0.06 -0.07 0.09 -0.07 0.03 0 0.08 -0.03 0.10 -0.06 0.02 -0.03 0.09 -0.08 0.16 -0.12 l0.13 -0.07 -0.18 -0.13 c-0.10 -0.08 -0.19 -0.15 -0.19 -0.16 0 -0.01 0.08 -0.02 0.16 -0.02 0.13 0 0.16 0.02 0.16 0.09 0 0.07 0.03 0.09 0.12 0.09 0.19 0 1.09 0.93 1.49 1.53 0.36 0.54 0.69 1.21 0.69 1.41 0 0.16 -0.68 1.12 -0.88 1.24 -0.18 0.11 -0.60 0.11 -0.79 -0z" }),
            React__default['default'].createElement("path", { d: "M16.61 10.08 c-1.07 -0.20 -1.98 -0.97 -2.33 -2.01 -0.16 -0.48 -0.21 -1.32 -0.10 -1.84 0.23 -1.12 1.14 -2.06 2.23 -2.32 0.40 -0.09 1.29 -0.09 1.69 0 0.55 0.13 0.97 0.37 1.39 0.79 0.66 0.66 0.91 1.28 0.91 2.25 0 1.50 -0.78 2.60 -2.13 3.02 -0.38 0.12 -1.25 0.16 -1.65 0.09z m1.26 -1.56 c0.73 -0.34 1.19 -1.13 1.05 -1.81 -0.15 -0.70 -0.74 -1.28 -1.47 -1.42 -0.62 -0.11 -1.40 0.35 -1.73 1.03 -0.18 0.37 -0.19 0.90 -0 1.28 0.41 0.88 1.36 1.28 2.16 0.92z" })),
        React__default['default'].createElement("g", { fill: "#5c5e70" },
            React__default['default'].createElement("path", { d: "M16.71 8.75 c-1.32 -0.43 -1.74 -2.10 -0.77 -3.07 0.58 -0.59 1.41 -0.71 2.18 -0.33 0.68 0.34 1.10 1.19 0.95 1.94 -0.11 0.59 -0.49 1.09 -1.03 1.35 -0.26 0.13 -0.36 0.15 -0.73 0.16 -0.25 0.01 -0.50 -0.01 -0.61 -0.05z" })),
        React__default['default'].createElement("g", { fill: "#6eb260" },
            React__default['default'].createElement("path", { d: "M11.61 23.96 c-0.29 -0.01 -0.33 -0.03 -0.42 -0.14 -0.16 -0.20 -0.41 -0.43 -0.63 -0.56 l-0.20 -0.12 0.03 -0.32 c0.01 -0.17 0.04 -0.46 0.06 -0.64 0.04 -0.38 -0.07 -0.94 -0.25 -1.40 -0.31 -0.77 -1.01 -1.54 -1.76 -1.91 -0.23 -0.12 -0.45 -0.21 -0.49 -0.21 -0.04 0 -0.07 -0.06 -0.07 -0.17 0 -0.17 0.07 -0.24 1.28 -1.47 0.80 -0.80 1.30 -1.34 1.32 -1.41 0.05 -0.20 -0.06 -0.35 -0.85 -1.13 -0.81 -0.80 -0.87 -0.84 -1.15 -0.65 -0.08 0.05 -0.68 0.64 -1.35 1.31 -1.11 1.12 -1.23 1.23 -1.36 1.21 -0.12 -0.01 -0.15 -0.05 -0.25 -0.28 -0.35 -0.85 -1.15 -1.65 -2.02 -2.02 -0.64 -0.26 -1.04 -0.30 -2.13 -0.20 l-0.26 0.03 -0.22 -0.33 c-0.15 -0.22 -0.32 -0.41 -0.53 -0.55 l-0.30 -0.22 -0 -0.35 c-0.03 -1.80 0.21 -3.25 0.79 -4.73 1.09 -2.79 3.17 -5.07 5.82 -6.39 0.37 -0.18 0.67 -0.36 0.67 -0.39 0 -0.03 0.03 -0.06 0.07 -0.06 0.06 0 0.07 0.07 0.07 0.32 0 0.40 -0.06 0.62 -0.22 0.76 -0.11 0.10 -0.17 0.12 -0.63 0.14 -0.53 0.02 -0.69 0.08 -0.57 0.20 0.04 0.04 0.25 0.07 0.57 0.08 0.45 0.02 0.52 0.04 0.63 0.14 0.16 0.15 0.22 0.37 0.22 0.81 0 0.40 0.08 0.61 0.18 0.43 0.03 -0.05 0.05 -0.29 0.05 -0.52 0 -0.70 0.14 -0.84 0.85 -0.84 0.31 0 0.47 -0.02 0.53 -0.07 0.17 -0.13 0.01 -0.19 -0.54 -0.22 -0.51 -0.02 -0.52 -0.03 -0.67 -0.18 l-0.15 -0.15 -0.01 -0.56 c-0.02 -0.54 0.01 -0.68 0.12 -0.49 0.03 0.06 0.08 0.06 0.39 -0.05 1.38 -0.46 2.96 -0.67 4.46 -0.59 1.68 0.09 3.20 0.49 4.67 1.23 0.24 0.12 0.45 0.21 0.48 0.19 0.03 -0.02 0.05 0.01 0.05 0.06 0 0.07 -0.08 0.11 -0.36 0.19 -1.40 0.41 -3.07 1.23 -4.24 2.10 -0.52 0.39 -1.21 0.97 -1.47 1.23 -0.13 0.14 -0.22 0.19 -0.32 0.19 -0.12 0 -0.13 -0.01 -0.08 -0.07 0.03 -0.04 0.05 -0.08 0.04 -0.09 -0.05 -0.04 -0.87 -0.22 -1.24 -0.27 -1.42 -0.18 -2.98 0.36 -4.28 1.50 -0.53 0.46 -0.67 0.75 -0.50 1.07 0.12 0.22 0.28 0.33 0.66 0.43 0.90 0.24 1.48 0.75 2 1.76 0.20 0.39 0.22 0.41 0.25 0.29 0.03 -0.11 0.04 -0.12 0.09 -0.06 0.03 0.04 0.22 0.10 0.43 0.14 0.77 0.15 1.29 0.33 1.29 0.45 0 0.05 -0.03 0.08 -0.08 0.08 -0.04 0 -0.33 0.18 -0.63 0.40 -0.48 0.36 -0.55 0.42 -0.58 0.57 -0.01 0.09 -0.01 0.21 0.01 0.26 0.06 0.13 3.39 3.52 3.56 3.62 0.16 0.10 0.30 0.11 0.47 0.03 0.15 -0.07 0.89 -1.06 0.88 -1.18 0 -0.06 0.02 -0.08 0.09 -0.07 0.12 0.02 0.27 0.43 0.43 1.21 0.10 0.47 0.10 0.54 0.04 0.59 -0.06 0.04 -0.05 0.06 0.08 0.11 0.32 0.13 0.87 0.47 1.13 0.70 0.48 0.43 0.83 1.03 0.90 1.55 0.04 0.24 0.29 0.53 0.50 0.59 0.28 0.07 0.46 -0.01 0.81 -0.38 1.38 -1.43 1.96 -3.36 1.55 -5.14 -0.11 -0.47 -0.16 -0.57 -0.24 -0.51 -0.06 0.05 -0.07 0.04 -0.07 -0.08 0 -0.10 0.09 -0.24 0.40 -0.58 1.40 -1.54 2.46 -3.38 3.04 -5.26 0.07 -0.23 0.15 -0.41 0.18 -0.41 0.06 0 0.16 0.22 0.50 1.04 0.86 2.10 1.08 4.58 0.60 6.91 -0.45 2.20 -1.64 4.38 -3.26 6 -2.37 2.35 -5.62 3.64 -8.85 3.50z m10.38 -9.10 c0.02 -0.05 0.05 -0.30 0.05 -0.54 0 -0.42 0.01 -0.45 0.13 -0.59 0.15 -0.17 0.37 -0.23 0.86 -0.23 0.25 0 0.38 -0.02 0.41 -0.07 0.09 -0.11 -0.09 -0.17 -0.55 -0.17 -0.71 0 -0.82 -0.11 -0.85 -0.85 -0.03 -0.54 -0.09 -0.70 -0.22 -0.53 -0.05 0.07 -0.07 0.22 -0.07 0.53 0 0.71 -0.14 0.85 -0.85 0.85 -0.29 0 -0.46 0.02 -0.52 0.07 -0.14 0.11 0 0.15 0.51 0.18 0.26 0.01 0.52 0.05 0.58 0.08 0.21 0.11 0.29 0.32 0.29 0.74 0 0.53 0.10 0.77 0.23 0.53z m-17.16 -2.70 l0 -0.49 0.16 -0.18 0.16 -0.17 0.52 -0.02 c0.54 -0.02 0.68 -0.08 0.54 -0.19 -0.05 -0.04 -0.23 -0.07 -0.55 -0.08 -0.72 -0.03 -0.83 -0.15 -0.83 -0.89 0 -0.32 -0.02 -0.44 -0.07 -0.48 -0.13 -0.11 -0.18 0.02 -0.21 0.56 -0.03 0.48 -0.04 0.52 -0.16 0.64 -0.12 0.12 -0.16 0.13 -0.64 0.15 -0.54 0.02 -0.68 0.08 -0.56 0.21 0.05 0.05 0.16 0.07 0.50 0.07 0.73 0 0.84 0.11 0.87 0.83 0.01 0.50 0.08 0.68 0.21 0.57 0.05 -0.04 0.07 -0.19 0.07 -0.54z" })),
        React__default['default'].createElement("g", { fill: "#ffd15c" },
            React__default['default'].createElement("path", { d: "M21.70 15.07 c-0.04 -0.05 -0.08 -0.25 -0.09 -0.55 -0.04 -0.74 -0.14 -0.83 -0.87 -0.86 -0.41 -0.01 -0.48 -0.02 -0.55 -0.11 -0.11 -0.13 -0.11 -0.21 0.02 -0.32 0.09 -0.08 0.16 -0.09 0.54 -0.09 0.72 0 0.85 -0.14 0.85 -0.86 0 -0.39 0.01 -0.46 0.09 -0.54 0.11 -0.11 0.23 -0.12 0.35 -0.03 0.08 0.06 0.10 0.15 0.12 0.58 0.03 0.75 0.14 0.86 0.84 0.86 0.22 0 0.45 0.01 0.49 0.03 0.13 0.05 0.18 0.25 0.09 0.38 -0.07 0.10 -0.11 0.11 -0.44 0.11 -0.50 0 -0.71 0.06 -0.86 0.23 -0.13 0.14 -0.13 0.17 -0.13 0.60 0 0.34 -0.02 0.48 -0.08 0.56 -0.08 0.12 -0.30 0.14 -0.40 0.03z" }),
            React__default['default'].createElement("path", { d: "M4.52 12.84 c-0.07 -0.08 -0.09 -0.19 -0.10 -0.57 -0.03 -0.72 -0.14 -0.83 -0.87 -0.83 -0.50 0 -0.61 -0.06 -0.59 -0.31 0.02 -0.19 0.18 -0.25 0.68 -0.25 0.41 0 0.44 -0 0.59 -0.14 0.15 -0.14 0.15 -0.15 0.18 -0.65 0.03 -0.56 0.07 -0.67 0.28 -0.67 0.22 0 0.28 0.12 0.28 0.58 0 0.73 0.12 0.85 0.83 0.88 0.38 0.01 0.49 0.03 0.57 0.10 0.12 0.10 0.13 0.21 0.03 0.34 -0.06 0.08 -0.15 0.09 -0.59 0.11 l-0.52 0.02 -0.16 0.17 -0.16 0.18 0 0.49 c0 0.45 -0.01 0.50 -0.10 0.56 -0.14 0.10 -0.24 0.09 -0.35 -0.02z" }),
            React__default['default'].createElement("path", { d: "M7.41 3.90 c-0.08 -0.08 -0.10 -0.16 -0.10 -0.46 0 -0.45 -0.06 -0.67 -0.22 -0.82 -0.11 -0.10 -0.17 -0.11 -0.62 -0.14 -0.57 -0.03 -0.68 -0.08 -0.65 -0.30 0.02 -0.21 0.17 -0.26 0.68 -0.26 0.39 0 0.44 -0.01 0.57 -0.12 0.18 -0.15 0.24 -0.36 0.24 -0.82 0 -0.38 0.07 -0.51 0.27 -0.51 0.17 0 0.22 0.13 0.25 0.64 0.02 0.47 0.03 0.49 0.18 0.64 0.15 0.15 0.16 0.15 0.67 0.18 0.44 0.02 0.53 0.04 0.59 0.12 0.09 0.12 0.08 0.24 -0.03 0.35 -0.08 0.08 -0.15 0.09 -0.54 0.09 -0.72 0 -0.86 0.14 -0.86 0.85 0 0.46 -0.04 0.57 -0.22 0.62 -0.07 0.02 -0.13 0 -0.20 -0.07z" })),
        React__default['default'].createElement("g", { fill: "#e8dbc4" },
            React__default['default'].createElement("path", { d: "M4.91 17.51 c-0.44 -0.49 -1.67 -0.86 -2.44 -0.72 -0.31 0.06 -0.73 0.25 -0.96 0.44 -0.08 0.07 -0.17 0.12 -0.21 0.10 -0.14 -0.06 -0.67 -1.43 -0.91 -2.39 -0.24 -0.92 -0.41 -2.33 -0.29 -2.33 0.03 0 0.18 0.09 0.34 0.20 0.25 0.17 0.62 0.58 0.77 0.85 0.04 0.06 0.08 0.07 0.30 0.02 0.38 -0.08 1.10 -0.07 1.50 0.02 1.25 0.29 2.25 1.17 2.72 2.40 0.03 0.09 0.16 -0.02 1.32 -1.18 1.07 -1.08 1.31 -1.29 1.47 -1.34 0.24 -0.06 0.51 0 0.68 0.15 l0.13 0.12 -1.93 1.92 c-1.91 1.90 -1.93 1.92 -2.11 1.92 -0.16 -0 -0.22 -0.03 -0.37 -0.21z" }),
            React__default['default'].createElement("path", { d: "M10.05 10.50 c-0.39 -0.16 -1.12 -0.37 -1.57 -0.45 -0.10 -0.01 -0.18 -0.05 -0.18 -0.08 0 -0.03 0.13 -0.35 0.30 -0.71 1.60 -3.57 4.71 -6.36 8.42 -7.57 0.56 -0.18 1.76 -0.45 2.53 -0.55 0.63 -0.09 2.89 -0.12 3.25 -0.05 0.23 0.05 0.22 0.15 -0.02 0.22 -0.11 0.03 -0.29 0.08 -0.39 0.10 -1.32 0.34 -3.01 1.12 -4.61 2.14 -0.57 0.36 -0.66 0.40 -1 0.46 -0.70 0.12 -1.24 0.41 -1.72 0.93 -0.26 0.27 -0.67 0.97 -0.67 1.13 0 0.03 -0.25 0.29 -0.55 0.58 -1.27 1.19 -3.29 3.60 -3.29 3.92 0 0.07 -0.01 0.12 -0.03 0.12 -0.02 0 -0.23 -0.08 -0.47 -0.18z" })),
        React__default['default'].createElement("g", { fill: "#f9eed7" },
            React__default['default'].createElement("path", { d: "M10.41 23.88 c-3.82 -0.52 -7.10 -2.80 -9 -6.27 l-0.20 -0.37 0.10 -0.11 c0.17 -0.18 0.70 -0.43 1.03 -0.49 0.89 -0.16 2.23 0.20 2.72 0.73 0.10 0.11 0.21 0.21 0.22 0.21 0.02 0 0.89 -0.85 1.93 -1.90 1.05 -1.05 1.92 -1.90 1.95 -1.90 0.07 0 1.36 1.31 1.42 1.44 0.07 0.14 0.07 0.46 -0.01 0.61 -0.04 0.07 -0.63 0.68 -1.31 1.37 -0.68 0.68 -1.25 1.26 -1.25 1.27 0 0.02 0.03 0.04 0.07 0.04 0.04 0 0.26 0.09 0.49 0.21 0.31 0.15 0.53 0.31 0.81 0.58 0.86 0.81 1.27 1.79 1.20 2.92 -0.01 0.27 -0.04 0.56 -0.06 0.64 -0.02 0.13 -0.01 0.15 0.11 0.22 0.28 0.14 0.86 0.71 0.86 0.84 0 0.05 -0.53 0.03 -1.08 -0.04z" }),
            React__default['default'].createElement("path", { d: "M14.14 15.52 c-0.36 -1.99 -1.65 -3.74 -3.46 -4.74 -0.18 -0.10 -0.36 -0.18 -0.39 -0.18 -0.17 0 1.11 -1.65 2.27 -2.92 0.68 -0.75 1.63 -1.65 1.77 -1.68 0.10 -0.02 0.10 -0.02 0.03 0.19 -0.05 0.14 -0.07 0.41 -0.08 0.78 0 0.50 0.01 0.60 0.13 0.95 0.32 0.92 0.99 1.59 1.93 1.92 0.71 0.24 1.63 0.16 2.32 -0.19 1.20 -0.63 1.84 -2.08 1.50 -3.42 -0.13 -0.52 -0.37 -0.92 -0.82 -1.36 -0.58 -0.58 -1.25 -0.86 -2.05 -0.86 -0.53 0 -0.52 -0.03 0.34 -0.57 1.42 -0.90 2.59 -1.47 3.94 -1.94 0.52 -0.17 1.22 -0.36 1.39 -0.36 l0.15 0 0.04 0.46 c0.09 1.09 0.03 2.59 -0.15 3.67 -0.25 1.42 -0.61 2.55 -1.24 3.82 -1.30 2.64 -3.38 4.78 -6 6.18 -0.39 0.21 -1.45 0.69 -1.52 0.69 -0 0 -0.05 -0.19 -0.09 -0.42z" }))));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Box = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$4;

var Flex = styled__default['default'](Box)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$5;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$l, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$6, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$j, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$7, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$8;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$9;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$a;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardHeader = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var CardFooter = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$d;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$e;

var scales$1 = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "24px";
        case scales$1.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$1.MD,
};
var templateObject_1$f;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$g, templateObject_2$3;

var bunnyFall = styled.keyframes(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArrays(Array(count)).map(function (_, index) { return (React__default['default'].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Icon$r, { width: size, height: size }))); });
    return React__default['default'].createElement("div", null, bunnies);
};
var templateObject_1$h, templateObject_2$4;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$1;
var style = (_a$1 = {},
    _a$1[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$1[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$1[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$1[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$1);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$i;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$j;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$k, templateObject_2$5;

var scales$2 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$2.MD : _b;
    switch (scale) {
        case scales$2.SM:
            return "32px";
        case scales$2.LG:
            return "48px";
        case scales$2.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$2.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$l;

var GridLayout = styled__default['default'].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$m;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$n;

var NotificationDotRoot = styled__default['default'].span(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default['default'].span(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default['default'].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default['default'].createElement(Dot, { show: show })));
};
var templateObject_1$o, templateObject_2$6;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "24px";
        case scales$3.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "12px";
        case scales$3.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$3.MD,
    m: 0,
};
var templateObject_1$p;

var variants$2 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
};
var scales$4 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b$1;
var scaleVariants$1 = (_a$2 = {},
    _a$2[scales$4.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$2[scales$4.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$2);
var styleVariants$1 = (_b$1 = {},
    _b$1[variants$2.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b$1[variants$2.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b$1[variants$2.SUCCESS] = {
        backgroundColor: "success",
    },
    _b$1[variants$2.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b$1[variants$2.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b$1[variants$2.BINANCE] = {
        backgroundColor: "binance",
    },
    _b$1[variants$2.FAILURE] = {
        backgroundColor: "failure",
    },
    _b$1);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants$2.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants$1[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.space, getOutlineStyles);
var templateObject_1$q;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$4.MD,
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$r;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$w, { color: "primary", ml: "4px" })));
};

var variants$3 = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$3;
var styleVariants$2 = (_a$3 = {},
    _a$3[variants$3.ROUND] = {
        borderRadius: "32px",
    },
    _a$3[variants$3.FLAT] = {
        borderRadius: 0,
    },
    _a$3);

var Bar = styled__default['default'].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$3.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$3.FLAT ? "0" : "32px");
}, styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.space);
var templateObject_1$s, templateObject_2$7;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$t;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$3.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressBunny, showProgressBunny = _e === void 0 ? false : _e;
    return (React__default['default'].createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$E, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.7694%205.63421C11.8457%206.02664%2011.9158%206.4375%2011.9836%206.85716C11.6151%206.85766%2011.2482%206.87522%2010.8839%206.90895C10.6029%206.29464%2010.2694%205.67199%209.88441%205.05277C7.39613%201.05079%205.06199%200.901096%202.98861%202.01265C0.915239%203.12421%200.810677%205.89597%203.28297%208.59188C3.57049%208.90541%203.86254%209.23841%204.15744%209.58036C1.66027%2011.5156%200%2014.291%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8488%2021.8101%2010.6958%2018.6776%208.77602C18.8852%207.81022%2019%206.74856%2019%205.63421C19%201.17171%2017.159%200%2014.888%200C12.6171%200%2011.1155%202.27116%2011.7694%205.63421Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.146%205.75159C12.2105%206.10896%2012.2703%206.48131%2012.3281%206.86164C12.2189%206.85865%2012.1095%206.85714%2012%206.85714C11.3803%206.85714%2010.7648%206.90539%2010.159%206.99779C9.87904%206.41458%209.55472%205.82246%209.18725%205.23145C6.69897%201.22947%204.53826%200.986793%202.67882%201.98366C0.819381%202.98052%200.856278%205.67644%203.26696%208.40538C3.58076%208.76061%203.90097%209.13983%204.2247%209.52859C1.69013%2011.4659%200%2014.2644%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8658%2021.8318%2010.7272%2018.7243%208.80476C18.9022%207.86044%2019%206.83019%2019%205.75159C19%201.19612%2017.2549%200%2015.1022%200C12.9495%200%2011.5261%202.31847%2012.146%205.75159Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M9.50467%2015.0634C8.94352%2013.4456%206.79685%2013.4456%206.08131%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M18.8894%2015.0634C18.3283%2013.4456%2016.1816%2013.4456%2015.4661%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M11.4505%2019.0787C11.4505%2020.5097%2013.955%2020.5097%2013.955%2019.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var SliderContainer = styled__default['default'](Box)(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  position: relative;\n  height: 48px;\n"], ["\n  position: relative;\n  height: 48px;\n"])));
var SliderLabel = styled__default['default'].label(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"], ["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
styled__default['default'].img(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var BunnySlider = styled__default['default'].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"], ["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"])));
var StyledInput = styled__default['default'].input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"], ["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"])), function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
});
var BarBackground = styled__default['default'].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var BarProgress = styled__default['default'].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"], ["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"])), function (_a) {
    var progress = _a.progress, isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? "calc(100% - 16px)" : progress + "%");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var templateObject_1$u, templateObject_2$8, templateObject_3$2, templateObject_4$1, templateObject_5, templateObject_6, templateObject_7;

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 32", width: 15, height: 32 }, props),
        React__default['default'].createElement("path", { d: "M9.58803 20.8649C7.72935 21.3629 8.02539 24.0334 8.76388 26.7895C9.50238 29.5456 10.5812 32.0062 12.4399 31.5082C14.2986 31.0102 15.2334 28.0099 14.4949 25.2538C13.7564 22.4978 11.4467 20.3669 9.58803 20.8649Z", fill: "#0098A1" }),
        React__default['default'].createElement("path", { d: "M1 24.4516C1 20.8885 3.88849 18 7.45161 18H15V28H4.54839C2.58867 28 1 26.4113 1 24.4516Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M6.11115 17.2246C6.79693 18.4124 5.77784 19.3343 4.52793 20.0559C3.27802 20.7776 1.97011 21.1992 1.28433 20.0114C0.598546 18.8236 1.1635 17.1151 2.41341 16.3935C3.66332 15.6718 5.42537 16.0368 6.11115 17.2246Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M1.64665 23.6601C0.285995 25.0207 1.87759 27.1854 3.89519 29.203C5.91279 31.2206 8.07743 32.8122 9.43808 31.4515C10.7987 30.0909 10.1082 27.0252 8.09058 25.0076C6.07298 22.99 3.0073 22.2994 1.64665 23.6601Z", fill: "#1FC7D4" })));
};

// We need to adjust the offset as the percentage increases, as 100% really is 100% - label width. The number 10 is arbitrary, but seems to work...
var MOVING_SLIDER_LABEL_OFFSET_FACTOR = 10;
var Slider = function (_a) {
    var min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, props = __rest(_a, ["min", "max", "value", "onValueChanged", "valueLabel"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseInt(target.value, 10));
    };
    var progressPercentage = (value / max) * 100;
    var isCurrentValueMaxValue = value === max;
    var labelOffset = progressPercentage - progressPercentage / MOVING_SLIDER_LABEL_OFFSET_FACTOR;
    return (React__default['default'].createElement(SliderContainer, __assign({}, props),
        React__default['default'].createElement(Icon$O, { style: { position: "absolute" } }),
        React__default['default'].createElement(BunnySlider, null,
            React__default['default'].createElement(BarBackground, null),
            React__default['default'].createElement(BarProgress, { isCurrentValueMaxValue: isCurrentValueMaxValue, progress: progressPercentage }),
            React__default['default'].createElement(StyledInput, { type: "range", min: min, max: max, value: value, onChange: handleChange, isCurrentValueMaxValue: isCurrentValueMaxValue })),
        valueLabel && React__default['default'].createElement(SliderLabel, { progress: labelOffset }, valueLabel)));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React__default['default'].createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("g", { fill: "#0f5f54" },
                React__default['default'].createElement("path", { d: "M59.34 127.64 c-9.78 -0.69 -19.82 -3.90 -28.36 -9.04 -15.73 -9.47 -26.86 -25.72 -29.93 -43.73 -0.69 -4.04 -0.79 -5.52 -0.79 -10.95 0 -5.85 0.17 -7.75 1.12 -12.51 5.04 -25.13 24.89 -44.99 50.03 -50.03 4.76 -0.95 6.66 -1.12 12.51 -1.12 6.61 0 9.75 0.35 15.35 1.73 21.22 5.19 38.56 21.30 45.35 42.13 1.43 4.38 2.35 8.68 2.88 13.51 0.33 2.95 0.29 10.38 -0.09 13.46 -1.45 12.18 -6.02 23.20 -13.59 32.74 -2.24 2.81 -7.19 7.76 -10.02 10.02 -12.70 10.07 -28.39 14.94 -44.45 13.80z m9.06 -4.57 l1.04 -0.10 2.33 -3.29 c13.49 -19.06 28.50 -36.86 45.66 -54.10 5.50 -5.54 5.73 -5.78 5.61 -6.28 l-0.12 -0.50 -2.93 2.40 c-10.51 8.61 -20.27 17.46 -30.79 28 -8.44 8.42 -14.87 15.35 -22.36 24.06 -3.45 4 -8.02 9.61 -7.94 9.71 0.31 0.31 6.61 0.38 9.51 0.10z m-19.92 -6.28 c6.52 -6.95 16.72 -16.89 24.50 -23.89 13.99 -12.59 30.60 -25.58 45.68 -35.71 2.10 -1.41 3.83 -2.66 3.83 -2.74 -0.02 -0.72 -0.35 -0.60 -4.04 1.45 -27.89 15.46 -54.05 34.14 -77.90 55.63 -3.97 3.57 -4.78 4.35 -4.64 4.47 0.03 0.03 0.97 0.52 2.05 1.05 2.38 1.21 6.88 3.04 7.26 2.98 0.14 -0.03 1.62 -1.48 3.26 -3.24z m37.83 1.97 c2.19 -0.90 6.52 -3.07 7.78 -3.90 0.79 -0.53 0.98 -0.85 3.07 -4.71 7.14 -13.27 15.85 -27.46 24.53 -39.92 l1.48 -2.16 0 -1.19 0 -1.19 -1.22 1.43 c-11.94 14.08 -25.27 32.35 -34.98 47.94 -1.28 2.04 -2.43 3.88 -2.57 4.11 -0.14 0.21 -0.19 0.38 -0.14 0.38 0.07 0 1 -0.36 2.05 -0.79z m-55.93 -14.94 c1.12 -0.88 2.05 -1.67 2.05 -1.74 0 -0.55 -10.32 -14.75 -16.20 -22.29 -3.71 -4.76 -11.33 -14.06 -11.52 -14.06 -0.03 0 -0.02 0.57 0.05 1.26 0.12 1.19 0.17 1.31 1.45 3.14 6.23 8.92 14.46 21.98 20.11 31.95 1.04 1.83 1.90 3.33 1.93 3.33 0.03 0 0.98 -0.72 2.12 -1.59z m10.95 -8.18 c1.12 -0.81 2.07 -1.55 2.10 -1.64 0.14 -0.35 -11.99 -12.16 -19.29 -18.80 -6.23 -5.68 -18.77 -16.37 -19.17 -16.37 -0.09 0 -0.16 0.24 -0.16 0.53 0 0.45 0.62 1.14 4.95 5.49 9.32 9.30 17.70 18.44 25.98 28.36 1.81 2.16 3.33 3.92 3.40 3.92 0.07 0 1.04 -0.67 2.17 -1.48z m12.06 -8.35 c1.28 -0.86 2.33 -1.59 2.33 -1.62 0 -0.16 -9.35 -6.81 -14.49 -10.32 -5.59 -3.81 -13.54 -8.85 -20.10 -12.77 -5.73 -3.42 -15.18 -8.76 -15.51 -8.76 -0.05 0 -0.10 0.17 -0.10 0.40 0 0.33 0.69 0.88 3.92 3.07 13.51 9.18 26.60 19.18 38.50 29.45 1.47 1.26 2.76 2.26 2.88 2.21 0.12 -0.05 1.28 -0.79 2.57 -1.66z m13.80 -8.83 c14.71 -9.04 30.71 -17.53 46.71 -24.77 2.67 -1.22 5.50 -2.48 6.26 -2.79 l1.40 -0.60 -0.41 -1.55 c-2.12 -8 -6.21 -15.87 -11.76 -22.60 -1.76 -2.12 -5.76 -6.09 -7.97 -7.90 -9.13 -7.44 -19.48 -11.80 -31.47 -13.27 -2.78 -0.33 -9.76 -0.28 -12.59 0.09 -11.94 1.59 -22.48 6.16 -31.31 13.59 -2.31 1.95 -5.95 5.61 -7.80 7.85 -5.11 6.19 -9.04 13.71 -11.30 21.60 -0.35 1.17 -0.59 2.14 -0.55 2.17 0.03 0.03 1.66 0.76 3.61 1.60 16.73 7.35 35 16.91 50.63 26.51 1.79 1.10 3.35 1.98 3.45 1.93 0.09 -0.03 1.50 -0.86 3.11 -1.86z" }),
                React__default['default'].createElement("path", { d: "M60.57 76.66 c-14.09 -8.73 -32.24 -18.27 -48.41 -25.46 -4.21 -1.88 -4 -1.62 -3.26 -4.16 2.67 -9.11 8.37 -18.37 15.30 -24.86 9.33 -8.76 20.82 -14.06 33.29 -15.37 3.31 -0.35 9.69 -0.35 12.99 0 17.53 1.85 33.62 12.02 42.61 26.95 3.09 5.11 6.28 12.77 6.28 15.06 l0 0.79 -2.02 0.88 c-15.18 6.57 -34.67 16.77 -49.80 26.05 -3.76 2.29 -3.45 2.29 -6.99 0.12z m4.95 -8.07 c1.54 -2.31 3.57 -6.38 4.59 -9.16 1.05 -2.85 2.05 -6.76 2.54 -9.94 0.57 -3.59 0.57 -10.01 0 -13.59 -0.79 -5.14 -2.23 -9.76 -4.42 -14.25 -1.12 -2.31 -3.74 -6.59 -4.17 -6.87 -0.29 -0.19 -2.78 3.80 -4.30 6.87 -5.59 11.33 -6.40 24.65 -2.26 36.74 1.21 3.52 3.07 7.31 5.12 10.42 1.04 1.55 1.31 1.86 1.50 1.71 0.14 -0.10 0.76 -0.98 1.40 -1.93z m-9.95 -1.93 c-1.67 -3.36 -3.07 -7.33 -3.90 -11.07 -0.26 -1.10 -0.48 -2.05 -0.53 -2.09 -0.03 -0.03 -0.10 0.09 -0.17 0.26 -0.97 2.83 -2.26 5.42 -3.83 7.73 -0.52 0.76 -0.86 1.41 -0.79 1.43 0.09 0.03 2.36 1.33 5.07 2.86 2.71 1.55 4.93 2.78 4.97 2.71 0.02 -0.05 -0.35 -0.88 -0.81 -1.83z m19.39 0.02 c1.52 -0.88 3.64 -2.07 4.71 -2.66 1.05 -0.60 1.93 -1.14 1.93 -1.22 0 -0.09 -0.43 -0.78 -0.97 -1.54 -1.12 -1.64 -2.60 -4.55 -3.26 -6.45 -0.26 -0.74 -0.52 -1.31 -0.55 -1.26 -0.05 0.03 -0.24 0.76 -0.41 1.60 -0.85 3.76 -2.28 7.85 -3.93 11.26 -0.53 1.09 -0.98 2.05 -1.04 2.12 -0.07 0.19 0.14 0.09 3.52 -1.86z m-30.72 -9.40 c2.67 -4.50 4.11 -10.61 3.71 -15.78 -0.36 -4.62 -1.97 -9.45 -4.33 -13.08 l-0.78 -1.19 -0.81 1.28 c-3.12 4.85 -4.76 11.33 -4.26 16.87 0.22 2.33 0.69 4.71 1.33 6.71 0.71 2.14 2.57 5.87 3.50 6.97 0.24 0.29 0.28 0.29 0.57 -0.09 0.17 -0.22 0.66 -0.98 1.07 -1.69z m42.26 -0.02 c2.02 -3.38 3.42 -7.95 3.69 -12.13 0.40 -5.69 -1.24 -12.02 -4.31 -16.73 l-0.78 -1.17 -0.72 1.09 c-3.17 4.85 -4.90 11.75 -4.33 17.32 0.22 2.35 0.90 5.38 1.57 7.21 0.60 1.64 2.21 4.80 2.95 5.83 l0.52 0.72 0.33 -0.41 c0.17 -0.22 0.66 -1 1.09 -1.73z m-50.92 -1.22 c-2.98 -7.28 -3.26 -15.78 -0.79 -23.24 0.76 -2.26 2.16 -5.18 3.38 -7 0.90 -1.36 4.35 -5.87 4.61 -6.02 0.16 -0.10 3.33 3.90 4.64 5.85 1.12 1.67 2.36 4.12 3.14 6.18 l0.57 1.54 0.74 -2.92 c1.74 -6.97 4.43 -12.73 8.38 -17.98 0.45 -0.60 0.83 -1.16 0.83 -1.24 0 -0.16 -1.59 -0.03 -4.57 0.38 -17.20 2.42 -32.19 13.20 -39.87 28.71 -0.79 1.62 -1.76 3.73 -2.14 4.71 l-0.67 1.78 1.16 0.52 c4.66 2.10 9.28 4.30 14.70 6.99 3.47 1.73 6.33 3.11 6.37 3.07 0.03 -0.03 -0.17 -0.62 -0.47 -1.31z m59.19 -0.03 c3.26 -1.71 11.01 -5.43 15.82 -7.61 1.85 -0.85 3.40 -1.55 3.43 -1.59 0.05 -0.03 -0.17 -0.72 -0.50 -1.57 -3.88 -10.32 -10.92 -19.15 -20.18 -25.31 -6.35 -4.23 -13.23 -6.93 -20.74 -8.18 -1.98 -0.33 -5.68 -0.72 -5.80 -0.62 -0.02 0.02 0.45 0.69 1.05 1.48 3.85 5.11 6.87 11.75 8.50 18.68 0.35 1.47 0.52 1.97 0.60 1.73 0.09 -0.17 0.45 -1.12 0.81 -2.09 0.38 -0.98 1.09 -2.52 1.60 -3.42 0.83 -1.50 3.74 -5.55 5.19 -7.23 l0.57 -0.66 2.17 2.81 c2.43 3.17 3.45 4.74 4.45 6.88 4.07 8.73 4.09 18.91 0.05 28 -0.12 0.24 0.16 0.12 2.95 -1.33z" })),
            React__default['default'].createElement("g", { fill: "#6eb260" },
                React__default['default'].createElement("path", { d: "M60.12 123.69 c-1.22 -0.09 -2.35 -0.19 -2.47 -0.21 -0.38 -0.09 7.11 -9.09 13.99 -16.84 5.76 -6.49 10.09 -11.06 17.11 -18.06 10.61 -10.61 20.46 -19.55 31.48 -28.55 l3.19 -2.60 0.14 1.43 0.16 1.43 -5.76 5.78 c-17.15 17.22 -32.16 35 -45.68 54.12 l-2.33 3.29 -0.95 0.10 c-1.85 0.19 -6.68 0.24 -8.88 0.10z" }),
                React__default['default'].createElement("path", { d: "M43.90 120.34 c-2.55 -0.93 -4.52 -1.79 -7.04 -3.07 l-2.38 -1.21 1.35 -1.24 c21.13 -19.63 45.42 -37.80 70.61 -52.84 5.66 -3.36 15.96 -9.19 16.27 -9.19 0.03 0 0.14 0.36 0.19 0.83 0.07 0.45 0.16 0.93 0.21 1.10 0.07 0.21 -0.95 0.98 -4.14 3.12 -18.04 12.18 -35.50 26.13 -52.20 41.76 -4.62 4.33 -13.75 13.42 -17.92 17.87 -1.73 1.85 -3.21 3.38 -3.26 3.40 -0.07 0.02 -0.81 -0.22 -1.67 -0.53z" }),
                React__default['default'].createElement("path", { d: "M82.98 120.13 c8.11 -13.40 18.04 -27.83 27.88 -40.44 5.07 -6.52 12.59 -15.68 12.89 -15.70 0.09 0 0.09 1.04 0.03 2.29 l-0.12 2.28 -1.29 1.90 c-10.16 14.89 -17.47 26.81 -24.69 40.19 -2.57 4.80 -2.16 4.36 -6.59 6.62 -2.48 1.26 -6.85 3.12 -8 3.40 l-0.52 0.12 0.41 -0.67z" }),
                React__default['default'].createElement("path", { d: "M25.96 102.87 c-5.88 -10.33 -14.01 -23.25 -20.30 -32.28 l-1.36 -1.95 -0.10 -2.31 c-0.05 -1.28 -0.05 -2.33 0 -2.33 0.22 0 8.52 10.07 12.56 15.27 6.26 8.04 16.99 22.86 16.70 23.08 -0.67 0.57 -5.31 4.09 -5.38 4.09 -0.03 0 -1 -1.60 -2.10 -3.57z" }),
                React__default['default'].createElement("path", { d: "M35.50 94.05 c-8.02 -9.68 -16.72 -19.20 -26.24 -28.69 l-4.95 -4.97 0.02 -1 c0.05 -2.24 -0.19 -2.29 3.61 0.83 6.21 5.11 12.87 10.89 18.54 16.09 4.30 3.95 13.32 12.70 15.78 15.28 l2.40 2.54 -2.69 1.93 c-1.48 1.07 -2.78 1.97 -2.88 2 -0.10 0.03 -1.71 -1.78 -3.59 -4.02z" }),
                React__default['default'].createElement("path", { d: "M48.11 87.86 c-12.21 -10.57 -25.05 -20.41 -38.78 -29.77 -2.33 -1.59 -4.30 -2.90 -4.38 -2.93 -0.16 -0.05 0.10 -2.12 0.29 -2.31 0.14 -0.14 9.78 5.28 16.41 9.23 6.52 3.90 14.49 8.95 20.10 12.77 6.09 4.14 15.18 10.66 15.18 10.87 0 0.07 -1.43 1.07 -3.16 2.21 l-3.16 2.09 -2.50 -2.14z" }),
                React__default['default'].createElement("path", { d: "M60.38 79.08 c-15.49 -9.56 -32.38 -18.42 -49.85 -26.22 l-4.74 -2.12 0.03 -0.57 c0.10 -1.81 2.35 -8.18 4.26 -12.13 3.05 -6.31 6.31 -10.94 11.21 -15.92 9.63 -9.82 21.53 -15.70 35.55 -17.58 2.85 -0.38 10.80 -0.43 13.63 -0.09 12.01 1.47 22.34 5.83 31.47 13.27 2.21 1.81 6.21 5.78 7.97 7.90 5.68 6.88 9.69 14.68 11.89 23.03 0.28 1.09 0.45 2.02 0.38 2.09 -0.07 0.05 -0.81 0.40 -1.67 0.76 -3 1.26 -10.97 4.92 -15.80 7.26 -12.61 6.11 -25.05 12.90 -36.93 20.20 -2.05 1.26 -3.76 2.29 -3.80 2.29 -0.03 0 -1.64 -0.98 -3.59 -2.17z m6.66 -3.05 c15.13 -9.28 34.62 -19.48 49.80 -26.05 1.38 -0.59 2.02 -0.97 2.02 -1.16 0 -0.47 -1.04 -3.61 -1.91 -5.83 -7.87 -19.70 -25.96 -33.45 -46.97 -35.66 -6.95 -0.72 -14.42 -0.09 -21.34 1.81 -18.46 5.05 -33.38 19.55 -39.07 37.95 -0.31 1 -0.50 1.86 -0.45 1.93 0.07 0.07 1.64 0.79 3.48 1.60 15.94 7.09 34.38 16.78 48.49 25.51 1.47 0.90 2.74 1.64 2.85 1.64 0.10 0.02 1.50 -0.79 3.11 -1.76z" })),
            React__default['default'].createElement("g", { fill: "#ffcf4b" },
                React__default['default'].createElement("path", { d: "M63.02 70.68 c-4.02 -5.62 -6.78 -12.35 -7.97 -19.39 -0.59 -3.43 -0.76 -6.21 -0.66 -10.04 0.21 -7.44 1.76 -13.85 4.85 -20.11 1.36 -2.73 3.61 -6.47 3.88 -6.47 0.21 0 2.67 3.57 3.45 5 0.24 0.43 0.47 0.81 0.52 0.86 0.21 0.17 1.40 2.62 1.40 2.86 0 0.14 0.09 0.24 0.17 0.24 0.10 0 0.17 0.14 0.17 0.31 0 0.16 0.12 0.45 0.26 0.62 0.14 0.19 0.26 0.45 0.26 0.59 0 0.12 0.19 0.64 0.41 1.12 1.07 2.28 2.29 7.47 2.71 11.40 0.26 2.71 0.12 9.73 -0.28 12.18 -0.88 5.66 -2.23 10.20 -4.54 15.32 -0.90 2.02 -3.11 6.09 -3.54 6.54 -0.16 0.16 -0.41 -0.09 -1.10 -1.04z" }),
                React__default['default'].createElement("path", { d: "M41.76 59.14 c-1.05 -1.59 -2.57 -4.67 -3.12 -6.35 -2.26 -6.76 -1.93 -14.61 0.86 -21.06 0.91 -2.12 2.24 -4.31 2.57 -4.26 0.31 0.07 1.88 2.52 2.54 3.93 0.24 0.52 0.55 1.16 0.69 1.41 0.14 0.24 0.24 0.60 0.24 0.78 0 0.17 0.07 0.40 0.16 0.48 0.26 0.26 0.98 2.92 1.33 4.83 0.41 2.40 0.43 8.61 0 10.95 -0.38 2.14 -1.02 4.40 -1.78 6.21 -0.62 1.54 -2.24 4.49 -2.43 4.49 -0.07 0 -0.53 -0.64 -1.05 -1.41z" }),
                React__default['default'].createElement("path", { d: "M84.08 59.20 c-1.86 -2.79 -3.19 -5.92 -3.93 -9.19 -1.35 -6.05 -0.86 -12.27 1.40 -17.75 0.78 -1.90 2.42 -4.83 2.71 -4.83 0.21 0 1.83 2.29 1.83 2.59 0 0.07 0.16 0.31 0.36 0.53 0.19 0.22 0.40 0.62 0.45 0.90 0.05 0.26 0.17 0.52 0.24 0.57 0.09 0.05 0.16 0.24 0.16 0.43 0 0.17 0.09 0.33 0.17 0.33 0.10 0 0.17 0.16 0.17 0.35 0 0.21 0.12 0.53 0.26 0.74 0.33 0.52 1.22 4.02 1.50 5.92 0.28 1.93 0.28 7.64 -0.02 9.47 -0.33 2.16 -1.14 5.09 -1.90 6.90 -0.66 1.55 -2.21 4.40 -2.42 4.40 -0.05 0 -0.50 -0.60 -0.98 -1.35z" })),
            React__default['default'].createElement("g", { fill: "#f8ac3c" },
                React__default['default'].createElement("path", { d: "M63.81 71.85 c-0.10 -0.55 -0.09 -1.12 0.05 -1.12 0.09 0 0.12 -0.07 0.07 -0.16 -0.05 -0.09 0.02 -0.21 0.17 -0.26 0.14 -0.05 0.21 -0.17 0.16 -0.28 -0.05 -0.09 -0.02 -0.17 0.09 -0.17 0.10 0 0.16 -0.07 0.10 -0.16 -0.05 -0.09 0.02 -0.21 0.17 -0.26 0.14 -0.05 0.21 -0.17 0.16 -0.28 -0.05 -0.09 -0.02 -0.17 0.09 -0.17 0.10 0 0.14 -0.07 0.09 -0.17 -0.05 -0.09 -0.02 -0.17 0.09 -0.17 0.10 0 0.14 -0.07 0.09 -0.17 -0.05 -0.09 -0.02 -0.17 0.07 -0.17 0.24 0 1.95 -3.42 1.83 -3.62 -0.07 -0.10 -0.02 -0.17 0.09 -0.17 0.10 0 0.14 -0.07 0.09 -0.17 -0.05 -0.09 -0.02 -0.17 0.10 -0.17 0.12 0 0.17 -0.05 0.10 -0.10 -0.05 -0.07 0.02 -0.22 0.16 -0.36 0.14 -0.16 0.22 -0.35 0.19 -0.47 -0.03 -0.10 0.05 -0.29 0.17 -0.43 0.14 -0.12 0.21 -0.35 0.16 -0.47 -0.05 -0.14 -0.02 -0.24 0.09 -0.24 0.10 0 0.12 -0.07 0.07 -0.17 -0.05 -0.09 -0.02 -0.17 0.09 -0.17 0.12 0 0.17 -0.10 0.14 -0.21 -0.05 -0.12 0.03 -0.33 0.16 -0.47 0.14 -0.12 0.21 -0.35 0.16 -0.47 -0.05 -0.14 -0.02 -0.24 0.09 -0.24 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 0 -0.26 0.09 -0.26 0.10 0 0.16 -0.16 0.10 -0.35 -0.05 -0.19 -0.02 -0.35 0.09 -0.35 0.10 0 0.14 -0.12 0.07 -0.26 -0.05 -0.14 0 -0.26 0.09 -0.26 0.10 0 0.16 -0.16 0.10 -0.35 -0.05 -0.19 -0.02 -0.35 0.09 -0.35 0.09 0 0.10 -0.16 0.05 -0.35 -0.07 -0.21 -0.03 -0.35 0.09 -0.35 0.12 0 0.16 -0.14 0.09 -0.35 -0.07 -0.21 -0.03 -0.35 0.09 -0.35 0.12 0 0.17 -0.14 0.12 -0.35 -0.05 -0.19 -0.02 -0.40 0.09 -0.45 0.09 -0.05 0.12 -0.22 0.07 -0.36 -0.07 -0.16 -0.02 -0.38 0.09 -0.50 0.10 -0.12 0.14 -0.31 0.07 -0.41 -0.05 -0.09 -0.05 -0.28 0.03 -0.38 0.07 -0.12 0.16 -0.41 0.19 -0.66 0.07 -0.71 0.16 -1.28 0.21 -1.47 0.05 -0.17 0.07 -0.33 0.28 -2.24 0.14 -1.40 0.14 -8.02 -0.02 -9.32 -0.24 -2.10 -0.33 -2.69 -0.71 -4.57 -0.05 -0.24 -0.09 -0.55 -0.10 -0.69 0 -0.14 -0.09 -0.35 -0.17 -0.47 -0.09 -0.12 -0.12 -0.29 -0.07 -0.38 0.07 -0.09 0.02 -0.22 -0.09 -0.28 -0.09 -0.07 -0.14 -0.22 -0.09 -0.35 0.03 -0.12 0.03 -0.28 -0.03 -0.33 -0.05 -0.07 -0.12 -0.22 -0.16 -0.36 -0.09 -0.47 -0.19 -0.86 -0.22 -0.90 -0.03 -0.03 -0.07 -0.12 -0.09 -0.22 -0.02 -0.09 -0.07 -0.21 -0.09 -0.26 -0.02 -0.05 -0.07 -0.16 -0.09 -0.26 -0.02 -0.09 -0.07 -0.21 -0.09 -0.26 -0.02 -0.05 -0.07 -0.16 -0.09 -0.26 -0.02 -0.09 -0.07 -0.21 -0.09 -0.26 -0.02 -0.05 -0.07 -0.16 -0.09 -0.26 -0.02 -0.09 -0.07 -0.21 -0.09 -0.26 -0.02 -0.05 -0.05 -0.14 -0.07 -0.21 -0.02 -0.09 -0.16 -0.43 -0.33 -0.79 -0.17 -0.36 -0.35 -0.79 -0.38 -0.98 -0.03 -0.17 -0.19 -0.50 -0.33 -0.74 -0.16 -0.22 -0.22 -0.47 -0.16 -0.52 0.05 -0.07 0.02 -0.12 -0.09 -0.12 -0.10 0 -0.22 -0.22 -0.29 -0.50 -0.05 -0.28 -0.36 -0.93 -0.69 -1.47 -0.31 -0.53 -0.52 -0.97 -0.47 -0.97 0.07 0 0.03 -0.07 -0.07 -0.14 -0.10 -0.07 -0.38 -0.47 -0.60 -0.90 -0.22 -0.43 -0.97 -1.57 -1.62 -2.55 -1.90 -2.79 -1.79 -2.45 -1.09 -3.38 l0.62 -0.79 0.52 0.64 c2.07 2.64 4.88 7.83 6.24 11.61 0.97 2.64 1.97 6.62 2.45 9.68 0.33 2.14 0.38 3.16 0.38 7.31 0 4.16 -0.05 5.18 -0.38 7.31 -0.83 5.30 -2.40 10.26 -4.67 14.77 -1.69 3.31 -4.57 7.68 -4.69 7.07z" }),
                React__default['default'].createElement("path", { d: "M42.54 60.29 c-0.05 -0.16 -0.02 -0.43 0.07 -0.62 0.10 -0.17 0.12 -0.33 0.05 -0.33 -0.07 0 0 -0.09 0.17 -0.19 0.16 -0.10 0.26 -0.24 0.21 -0.35 -0.07 -0.09 -0.02 -0.16 0.09 -0.16 0.10 0 0.14 -0.07 0.09 -0.17 -0.05 -0.09 -0.02 -0.17 0.09 -0.17 0.10 0 0.14 -0.07 0.09 -0.17 -0.05 -0.09 -0.03 -0.17 0.07 -0.17 0.24 0 0.91 -1.35 0.79 -1.55 -0.05 -0.10 -0.02 -0.17 0.10 -0.17 0.12 0 0.17 -0.05 0.10 -0.10 -0.05 -0.07 0.02 -0.22 0.16 -0.36 0.14 -0.16 0.22 -0.38 0.17 -0.50 -0.05 -0.14 -0.02 -0.24 0.09 -0.24 0.10 0 0.12 -0.07 0.07 -0.17 -0.05 -0.09 -0.02 -0.17 0.09 -0.17 0.12 0 0.17 -0.12 0.10 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.10 -0.26 -0.07 -0.14 -0.03 -0.29 0.07 -0.36 0.10 -0.05 0.14 -0.21 0.09 -0.35 -0.05 -0.14 0 -0.24 0.09 -0.24 0.10 0 0.16 -0.16 0.10 -0.35 -0.05 -0.19 -0.02 -0.35 0.09 -0.35 0.10 0 0.14 -0.16 0.09 -0.35 -0.05 -0.19 -0.02 -0.38 0.07 -0.43 0.09 -0.07 0.16 -0.28 0.16 -0.48 0 -0.21 0.03 -0.66 0.09 -0.98 0.21 -1.21 0.28 -2.55 0.28 -4.57 0.02 -2.38 -0.12 -3.98 -0.45 -5.69 -0.05 -0.28 -0.10 -0.64 -0.12 -0.78 0 -0.14 -0.09 -0.35 -0.17 -0.47 -0.09 -0.12 -0.12 -0.29 -0.07 -0.38 0.07 -0.09 0.03 -0.21 -0.07 -0.28 -0.10 -0.07 -0.14 -0.19 -0.07 -0.28 0.05 -0.09 0 -0.28 -0.10 -0.41 -0.12 -0.14 -0.16 -0.26 -0.09 -0.26 0.07 0 0.03 -0.12 -0.09 -0.26 -0.12 -0.14 -0.16 -0.26 -0.09 -0.26 0.07 0 0.03 -0.12 -0.09 -0.26 -0.12 -0.14 -0.16 -0.26 -0.09 -0.26 0.07 0 0.05 -0.10 -0.05 -0.22 -0.10 -0.12 -0.22 -0.41 -0.28 -0.67 -0.03 -0.24 -0.19 -0.64 -0.35 -0.86 -0.14 -0.21 -0.28 -0.47 -0.29 -0.57 -0.09 -0.57 -1.85 -3.66 -2.50 -4.42 -0.21 -0.22 -0.16 -0.38 0.33 -1.07 0.29 -0.45 0.64 -0.78 0.72 -0.76 0.35 0.10 1.86 2.48 2.78 4.35 4.40 8.99 3.73 20.46 -1.69 28.45 -0.98 1.45 -1.24 1.67 -1.41 1.22z" }),
                React__default['default'].createElement("path", { d: "M84.79 60.20 c-0.07 -0.21 -0.02 -0.47 0.09 -0.60 0.12 -0.14 0.16 -0.26 0.07 -0.26 -0.09 0 -0.02 -0.09 0.16 -0.19 0.16 -0.10 0.26 -0.24 0.21 -0.35 -0.07 -0.09 -0.02 -0.16 0.09 -0.16 0.10 0 0.14 -0.07 0.09 -0.17 -0.05 -0.09 -0.02 -0.17 0.09 -0.17 0.10 0 0.14 -0.07 0.09 -0.17 -0.05 -0.09 -0.03 -0.17 0.07 -0.17 0.24 0 0.91 -1.35 0.79 -1.55 -0.05 -0.10 -0.02 -0.17 0.10 -0.17 0.12 0 0.17 -0.05 0.10 -0.10 -0.05 -0.07 0.02 -0.22 0.16 -0.36 0.14 -0.16 0.22 -0.35 0.19 -0.47 -0.03 -0.10 0.05 -0.29 0.17 -0.43 0.14 -0.12 0.21 -0.35 0.16 -0.47 -0.05 -0.14 -0.02 -0.24 0.09 -0.24 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.09 -0.26 -0.05 -0.14 -0.02 -0.26 0.09 -0.26 0.10 0 0.16 -0.12 0.10 -0.26 -0.07 -0.14 -0.03 -0.29 0.07 -0.36 0.10 -0.05 0.14 -0.21 0.09 -0.35 -0.05 -0.12 -0.02 -0.28 0.09 -0.35 0.10 -0.05 0.14 -0.21 0.09 -0.35 -0.05 -0.12 -0.02 -0.28 0.09 -0.35 0.10 -0.05 0.14 -0.21 0.09 -0.35 -0.05 -0.12 0 -0.28 0.09 -0.35 0.10 -0.05 0.14 -0.29 0.09 -0.50 -0.05 -0.22 -0.03 -0.45 0.07 -0.52 0.09 -0.05 0.16 -0.31 0.16 -0.57 0 -0.26 0.07 -0.97 0.12 -1.59 0.28 -2.48 0.12 -5.93 -0.36 -8.31 -0.05 -0.28 -0.12 -0.66 -0.17 -0.86 -0.03 -0.22 -0.12 -0.59 -0.17 -0.83 -0.05 -0.24 -0.14 -0.55 -0.17 -0.69 -0.03 -0.14 -0.07 -0.28 -0.09 -0.29 -0.03 -0.03 -0.07 -0.12 -0.09 -0.22 -0.02 -0.09 -0.07 -0.22 -0.09 -0.29 -0.02 -0.09 -0.03 -0.21 -0.02 -0.29 0.02 -0.07 -0.07 -0.24 -0.17 -0.38 -0.10 -0.14 -0.16 -0.24 -0.09 -0.24 0.05 0 -0.05 -0.28 -0.24 -0.64 -0.17 -0.35 -0.29 -0.69 -0.24 -0.78 0.05 -0.07 0 -0.14 -0.09 -0.14 -0.10 0 -0.19 -0.14 -0.19 -0.29 0 -0.17 -0.12 -0.47 -0.26 -0.64 -0.14 -0.17 -0.21 -0.40 -0.16 -0.47 0.05 -0.09 0 -0.16 -0.10 -0.16 -0.10 0 -0.14 -0.07 -0.09 -0.17 0.05 -0.09 0.02 -0.17 -0.09 -0.17 -0.10 0 -0.14 -0.07 -0.09 -0.17 0.05 -0.09 0.03 -0.17 -0.07 -0.17 -0.09 0 -0.22 -0.16 -0.28 -0.36 -0.07 -0.19 -0.50 -0.93 -0.97 -1.62 l-0.85 -1.29 0.53 -0.72 c0.29 -0.41 0.62 -0.74 0.72 -0.74 0.62 0 3.29 4.92 4.24 7.81 2.74 8.30 1.57 17.77 -3.07 24.84 -0.57 0.86 -1.12 1.59 -1.21 1.59 -0.09 0 -0.22 -0.16 -0.28 -0.35z" })))));
};

var rotate$1 = styled.keyframes(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](Icon$Q)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
styled__default['default'](Icon$P)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$v, templateObject_2$9, templateObject_3$3, templateObject_4$2, templateObject_5$1;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$w, templateObject_2$a, templateObject_3$4, templateObject_4$3, templateObject_5$2;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled__default['default'].div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale$2("handleHeight"), getScale$2("handleLeft"), getScale$2("handleTop"), getScale$2("handleWidth"));
var Input$1 = styled__default['default'].input(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale$2("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale$2("toggleHeight"), getScale$2("toggleWidth"));
var templateObject_1$x, templateObject_2$b, templateObject_3$5;

var scales$5 = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$5.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input$1, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales$5.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #FF0000, 0px 0px 0px 4px rgba(255, 0, 0, 0.2)",
    focus: "0px 0px 0px 1px #4fd945, 0px 0px 0px 4px rgba(79, 217, 96, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(77, 104, 74, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$l, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$y, templateObject_2$c, templateObject_3$6;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #2a7a2e;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #2a7a2e;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$z;

var ModalWrapper = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$A;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    var textColor = isDark ? "#FFFFFF" : "#0f5f54";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 160 26" }, props),
        React__default['default'].createElement("g", { fill: textColor },
            React__default['default'].createElement("path", { d: "M50.99 19.36 c-1.84 -0.47 -3.44 -1.76 -4.38 -3.56 -0.49 -0.92 -0.55 -1.23 -0.55 -2.89 0 -1.66 0.06 -1.98 0.55 -2.89 0.72 -1.37 1.78 -2.41 3.19 -3.09 0.96 -0.47 1.39 -0.57 2.62 -0.57 3.23 0.02 5.79 2.17 6.45 5.44 0.37 1.84 -0.25 3.95 -1.64 5.56 -1.39 1.58 -4.24 2.50 -6.24 2.01z m3.76 -2.19 c1.86 -0.96 2.82 -3.15 2.37 -5.34 -0.78 -3.76 -5.46 -5.03 -8.16 -2.21 -0.86 0.88 -1.23 1.88 -1.23 3.29 0 2.29 1.27 3.99 3.52 4.71 0.80 0.27 2.54 0.04 3.50 -0.45z" }),
            React__default['default'].createElement("path", { d: "M23.39 18.93 c-0.18 -0.23 -0.31 -0.51 -0.31 -0.59 0 -0.08 1.58 -2.31 3.54 -4.97 1.94 -2.66 3.58 -4.95 3.64 -5.09 0.08 -0.23 -0.51 -0.27 -3.34 -0.27 l-3.44 0 0 -0.78 0 -0.78 4.30 0 4.28 0 0.31 0.59 0.31 0.59 -3.64 5.01 c-2 2.74 -3.62 5.03 -3.62 5.09 0 0.04 1.62 0.08 3.62 0.08 l3.62 0 0 0.78 0 0.78 -4.48 0 c-4.42 0 -4.50 0 -4.79 -0.43z" }),
            React__default['default'].createElement("path", { d: "M37.11 19.07 c-1.56 -0.59 -2.95 -1.92 -3.72 -3.56 -0.61 -1.31 -0.61 -3.87 0 -5.18 1.64 -3.58 5.87 -4.93 9.10 -2.88 0.94 0.61 2.19 2.25 2.43 3.17 0.12 0.51 0.10 0.53 -0.68 0.53 -0.72 0 -0.82 -0.06 -1.17 -0.72 -0.76 -1.51 -2.01 -2.21 -3.93 -2.21 -2.64 0 -4.56 1.98 -4.56 4.71 0 3.60 3.54 5.85 6.73 4.26 0.78 -0.39 1.84 -1.49 2.03 -2.11 0.10 -0.33 0.29 -0.41 1 -0.41 l0.86 0 -0.29 0.74 c-1.06 2.50 -3.21 3.97 -5.83 3.93 -0.67 0 -1.55 -0.14 -1.96 -0.27z" }),
            React__default['default'].createElement("path", { d: "M60.24 12.89 l0 -6.47 2.99 0.08 c2.62 0.06 3.07 0.12 3.79 0.51 1.53 0.80 2.31 2.66 1.94 4.64 -0.18 0.92 -1.17 2.01 -2.31 2.52 l-0.90 0.41 1.94 2.31 c1.06 1.29 1.94 2.37 1.94 2.41 0 0.04 -0.47 0.08 -1.02 0.08 l-1.04 0 -2.35 -2.86 c-1.29 -1.56 -2.37 -3.01 -2.41 -3.21 -0.06 -0.31 0.14 -0.35 1.60 -0.41 1.58 -0.08 1.70 -0.12 2.31 -0.70 0.53 -0.55 0.63 -0.76 0.63 -1.62 0 -0.86 -0.10 -1.08 -0.63 -1.62 -0.63 -0.61 -0.67 -0.63 -2.68 -0.68 l-2.05 -0.08 0 5.59 0 5.59 -0.88 0 -0.88 0 0 -6.47z" }),
            React__default['default'].createElement("path", { d: "M70.22 12.91 l0 -6.45 3.91 0 3.91 0 0 0.88 0 0.88 -3.03 0 -3.03 0 0 1.96 0 1.96 2.93 0 2.93 0 0 0.88 0 0.88 -2.93 0 -2.93 0 0 1.86 0 1.86 3.03 0 3.03 0 0 0.88 0 0.88 -3.91 0 -3.91 0 0 -6.45z" }),
            React__default['default'].createElement("path", { d: "M85.48 12.91 l0 -6.45 3.81 0 3.81 0 0 0.88 0 0.88 -2.93 0 -2.93 0 0 1.96 0 1.96 2.64 0 2.64 0 0 0.88 0 0.88 -2.64 0 -2.64 0 0 2.74 0 2.74 -0.88 0 -0.88 0 0 -6.45z" }),
            React__default['default'].createElement("path", { d: "M93.50 18.48 l0 -0.88 1.17 0 1.17 0 0 -4.69 0 -4.69 -1.17 0 -1.17 0 0 -0.88 0 -0.88 3.33 0 3.33 0 0 0.88 0 0.88 -1.27 0 -1.27 0 0 4.69 0 4.69 1.27 0 1.27 0 0 0.88 0 0.88 -3.33 0 -3.33 0 0 -0.88z" }),
            React__default['default'].createElement("path", { d: "M101.12 12.91 l0 -6.45 0.65 0 c0.63 0 0.76 0.16 3.76 4.52 1.72 2.48 3.19 4.56 3.27 4.60 0.08 0.06 0.16 -1.98 0.16 -4.50 l0 -4.62 0.88 0 0.88 0 0 6.45 0 6.45 -0.72 0 c-0.74 -0.02 -0.74 -0.02 -3.46 -3.99 -1.49 -2.19 -2.91 -4.24 -3.17 -4.54 l-0.45 -0.57 -0.02 4.56 0 4.54 -0.88 0 -0.88 0 0 -6.45z" }),
            React__default['default'].createElement("path", { d: "M111.10 19.27 c0 -0.06 1.15 -3.01 2.56 -6.57 l2.56 -6.45 0.59 0.06 c0.59 0.06 0.63 0.14 3.19 6.57 l2.60 6.49 -0.92 0 -0.94 0 -0.76 -1.96 -0.76 -1.98 -2.43 0.06 -2.41 0.06 -0.80 1.92 -0.78 1.90 -0.84 0 c-0.47 0 -0.86 -0.04 -0.86 -0.10z m6.61 -7.73 c-0.45 -1.31 -0.88 -2.29 -0.96 -2.21 -0.18 0.20 -1.55 4.03 -1.55 4.34 0 0.14 0.55 0.22 1.66 0.22 l1.64 0 -0.80 -2.35z" }),
            React__default['default'].createElement("path", { d: "M123.03 12.89 l0 -6.45 0.63 0.06 c0.57 0.06 0.88 0.43 3.76 4.60 l3.15 4.54 0.06 -4.60 0.04 -4.58 0.88 0 0.88 0 0 6.45 0 6.45 -0.65 0 c-0.65 0 -0.76 -0.16 -3.78 -4.50 -1.70 -2.46 -3.17 -4.50 -3.25 -4.50 -0.10 0 -0.16 2.03 -0.16 4.50 l0 4.50 -0.78 0 -0.78 0 0 -6.47z" }),
            React__default['default'].createElement("path", { d: "M138.07 19.11 c-2.62 -0.98 -4.30 -3.36 -4.34 -6.10 -0.06 -5.59 6.30 -8.59 10.41 -4.89 0.59 0.55 1.78 2.48 1.78 2.91 0 0.06 -0.39 0.12 -0.86 0.12 -0.76 0 -0.88 -0.06 -1.10 -0.61 -0.61 -1.45 -2.09 -2.33 -3.95 -2.33 -1.96 0 -3.38 0.90 -4.19 2.64 -1.49 3.19 0.68 6.77 4.15 6.81 1.68 0.02 2.88 -0.61 3.79 -1.98 0.61 -0.94 0.72 -1.02 1.43 -1.02 0.68 0 0.74 0.04 0.61 0.45 -0.43 1.43 -1.68 2.89 -3.09 3.60 -1.21 0.63 -3.52 0.80 -4.64 0.39z" }),
            React__default['default'].createElement("path", { d: "M147.09 12.91 l0 -6.45 3.91 0 3.91 0 0 0.88 0 0.88 -3.03 0 -3.03 0 0 1.96 0 1.96 2.93 0 2.93 0 0 0.88 0 0.88 -2.93 0 -2.93 0 0 1.86 0 1.86 3.03 0 3.03 0 0 0.88 0 0.88 -3.91 0 -3.91 0 0 -6.45z" })),
        React__default['default'].createElement("g", { fill: "#0f5f54" },
            React__default['default'].createElement("path", { d: "M7.12 20.66 c-3.42 -1.27 -5.56 -4.36 -5.56 -8.04 0 -5.87 5.52 -9.88 11.21 -8.12 2.50 0.78 4.77 3.07 5.50 5.56 0.39 1.33 0.41 3.85 0.02 5.12 -0.72 2.44 -2.93 4.69 -5.42 5.54 -1.70 0.57 -4.13 0.55 -5.75 -0.06z m2.07 -7.49 c0 -0.10 -0.14 -0.33 -0.29 -0.53 -0.16 -0.22 -0.29 -0.59 -0.29 -0.82 0 -0.70 -0.29 -0.70 -0.68 0.04 -0.20 0.37 -0.31 0.68 -0.27 0.72 1.23 0.72 1.55 0.84 1.55 0.59z m2.64 -0.20 c0.78 -0.37 0.78 -0.37 0.35 -1.23 l-0.31 -0.67 -0.20 0.49 c-0.16 0.43 -0.51 1.23 -0.68 1.60 -0.10 0.22 0.08 0.18 0.84 -0.20z m-1.15 -2.66 c0.08 -0.57 0 -1.25 -0.22 -2.01 l-0.35 -1.15 -0.29 0.68 c-0.39 0.88 -0.41 2.84 -0.06 3.70 l0.27 0.65 0.27 -0.51 c0.14 -0.27 0.31 -0.88 0.37 -1.35z m-4.40 1.08 c-0.39 -0.72 -0.25 -2.80 0.23 -3.66 0.23 -0.43 0.57 -0.78 0.70 -0.78 0.16 0 0.45 0.33 0.67 0.74 0.20 0.39 0.43 0.72 0.53 0.72 0.08 0 0.20 -0.33 0.27 -0.72 0.06 -0.41 0.33 -1.08 0.63 -1.49 0.27 -0.41 0.47 -0.80 0.41 -0.86 -0.06 -0.04 -0.67 0.06 -1.33 0.23 -1.41 0.35 -2.82 1.19 -3.68 2.15 -0.63 0.72 -1.68 2.43 -1.56 2.52 0.20 0.18 3.21 1.64 3.27 1.58 0.04 -0.04 -0.02 -0.23 -0.14 -0.45z m10.70 -1.11 c0.04 -0.04 -0.10 -0.39 -0.31 -0.82 -0.55 -1.08 -1.90 -2.52 -2.86 -3.09 -0.82 -0.49 -3.21 -1.19 -3.38 -1 -0.06 0.06 0.08 0.33 0.29 0.61 0.23 0.27 0.55 0.94 0.72 1.49 0.18 0.53 0.35 0.96 0.41 0.96 0.04 0 0.25 -0.35 0.47 -0.80 0.23 -0.43 0.51 -0.76 0.65 -0.70 0.14 0.04 0.43 0.41 0.68 0.84 0.37 0.63 0.43 1 0.37 2.13 -0.02 0.76 -0.14 1.53 -0.22 1.72 -0.14 0.27 0.20 0.18 1.47 -0.45 0.90 -0.45 1.66 -0.86 1.70 -0.88z" })),
        React__default['default'].createElement("g", { fill: "#6eb260" },
            React__default['default'].createElement("path", { d: "M10 19.72 c1.06 -1.31 5.81 -6.04 7.18 -7.18 1.08 -0.88 1.39 -0.82 0.49 0.12 -2.84 2.93 -3.85 4.13 -5.59 6.45 -1.19 1.60 -1.23 1.62 -2.05 1.62 l-0.86 0 0.84 -1.02z" }),
            React__default['default'].createElement("path", { d: "M6.71 20.03 l-0.61 -0.31 1.29 -1.19 c1.43 -1.29 4.95 -3.95 6.73 -5.09 1.72 -1.10 3.91 -2.31 4.01 -2.21 0.04 0.04 -0.53 0.49 -1.25 1.02 -2.29 1.60 -5.16 4.01 -7.32 6.08 -1.15 1.11 -2.11 2.01 -2.15 2.01 -0.04 0 -0.35 -0.14 -0.70 -0.31z" }),
            React__default['default'].createElement("path", { d: "M12.71 20.24 c0 -0.53 5.34 -7.71 5.44 -7.30 0.02 0.14 -0.51 1.10 -1.17 2.13 -0.68 1.04 -1.55 2.44 -1.92 3.17 -0.49 0.92 -0.90 1.41 -1.39 1.70 -0.74 0.41 -0.96 0.47 -0.96 0.29z" }),
            React__default['default'].createElement("path", { d: "M4.40 17.06 c-0.41 -0.72 -1.15 -1.90 -1.62 -2.62 -1.25 -1.92 -0.92 -1.98 0.57 -0.12 2.11 2.68 2.60 3.46 2.33 3.78 -0.14 0.16 -0.29 0.29 -0.37 0.29 -0.06 0 -0.47 -0.61 -0.90 -1.33z" }),
            React__default['default'].createElement("path", { d: "M5.52 15.88 c-0.65 -0.72 -1.70 -1.88 -2.37 -2.56 -0.67 -0.68 -1.19 -1.31 -1.19 -1.43 0 -0.25 1.56 1.06 3.76 3.15 1.37 1.29 1.68 1.68 1.51 1.90 -0.12 0.16 -0.29 0.27 -0.37 0.27 -0.08 0 -0.67 -0.61 -1.33 -1.33z" }),
            React__default['default'].createElement("path", { d: "M6.55 14.73 c-0.86 -0.70 -2.25 -1.78 -3.09 -2.37 -3.19 -2.23 -0.55 -0.96 3.42 1.66 2.07 1.37 2.31 1.58 1.90 1.84 -0.45 0.29 -0.61 0.22 -2.23 -1.13z" }),
            React__default['default'].createElement("path", { d: "M8.90 14.24 c-0.53 -0.33 -2.29 -1.27 -3.87 -2.07 -3.27 -1.64 -3.11 -1.39 -2.05 -3.40 1.70 -3.21 5.81 -4.99 9.25 -3.99 2.60 0.76 4.93 3.03 5.67 5.54 0.10 0.39 -0.16 0.57 -2.80 1.90 -1.62 0.80 -3.34 1.74 -3.87 2.07 -0.51 0.31 -1.04 0.59 -1.13 0.59 -0.12 0 -0.65 -0.29 -1.19 -0.63z m1.62 0 c0.14 -0.14 0.23 -0.16 0.23 -0.04 0 0.10 0.08 0.08 0.16 -0.04 0.22 -0.31 2.33 -1.51 4.66 -2.62 l2.03 -1 -0.29 -0.72 c-0.80 -1.94 -2.31 -3.46 -4.34 -4.40 -0.76 -0.35 -1.31 -0.43 -2.89 -0.43 -1.72 0 -2.09 0.06 -3.07 0.53 -1.82 0.84 -3.56 2.70 -4.24 4.48 -0.20 0.53 -0.16 0.55 2.39 1.82 1.43 0.70 3.07 1.58 3.66 1.96 1.21 0.76 1.39 0.80 1.72 0.47z" })),
        React__default['default'].createElement("g", { fill: "#ffcf4b" },
            React__default['default'].createElement("path", { d: "M9.45 12.67 c-0.49 -0.92 -0.55 -1.25 -0.55 -2.89 0 -1.60 0.08 -2 0.49 -2.82 0.27 -0.53 0.59 -0.96 0.68 -0.96 0.12 0 0.41 0.43 0.68 0.96 0.41 0.82 0.49 1.21 0.49 2.82 0 1.64 -0.06 1.98 -0.55 2.89 -0.29 0.55 -0.57 1.02 -0.63 1.02 -0.06 0 -0.33 -0.47 -0.63 -1.02z" }),
            React__default['default'].createElement("path", { d: "M6.77 11.34 c-0.39 -0.98 -0.41 -2.15 -0.04 -3.03 0.35 -0.80 0.57 -0.86 0.86 -0.22 0.39 0.88 0.49 1.88 0.23 2.76 -0.37 1.31 -0.67 1.45 -1.06 0.49z" }),
            React__default['default'].createElement("path", { d: "M12.62 11.66 c-0.45 -0.68 -0.51 -2.46 -0.12 -3.38 0.33 -0.82 0.55 -0.82 0.92 0.04 0.37 0.90 0.33 2.17 -0.08 3.13 l-0.35 0.78 -0.37 -0.57z" }))));
};
var LogoWithText = React__default['default'].memo(Logo, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React__default['default'].createElement("g", { id: "surface1" },
            React__default['default'].createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React__default['default'].createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React__default['default'].createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "32px", height: "24px", viewBox: "0 0 32 24", "enable-background": "new 0 0 32 24" },
        React__default['default'].createElement("image", { id: "image0", width: "32", height: "24", x: "0", y: "0", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAF\nn0lEQVRIx5WWeXAUdRbHP7/ununJZI5kyExCSIyiQIEUGkTXI8b1QvFepcSjylCrFp4s61KUWJal\nVVuLpdbirmhZ3iISo1DlUbreiAdeZS1gJZwKKOdMGGYymZmeme5+/hEnQDbLhPdXv1+/ft/3+77X\n7z0V7pjJEeQY4GpgOjABiAAKSAGbXY/xqVay3zR37N6oRABBKYVWEhABYPeab4/kH+P/nAeAx4Bb\nAH3oS9G0MJpq0Yv2hUY2vwh/1XKs4nyKhT0YOkcj2jBn04ENwJyh4C7gaApNBKM/hzeZRrMKiOm9\nwQ1VbxKfeaNyD95+JDKUgb8Ajw810j0ekukUpFKQL4DSaIzUYSsQTQPHAU0F3VBgmcpZk40DmYWi\nGwPJqiC67+RJ5ec24PWhBspjkEkmqfcHWHLbPK5rP5ee7dvYsWcXgWAIKd9WQAmI6W0T19lALt8t\nmqJ/5+4RMWACbwEopXBF6Mvn0A0DT6GAvWkzbyxdwVlTTxmItHUaTTPO4UAmg8fQKRRLhKur0ZRC\nXBcnHOjSLOtLsawjox9SA08CEaUUIkLf/gR1/gC+TBbrqzXcffPtg+AAY2IxHl1wP4WNPRSKRaLh\nGnr37cV2HDQRlK4j4dBrI8gAKtwxMwrEAUQp+uJ7mT3jCh658c/EEwm+7l7P6PoG0v0Zbph+CQBv\nfr4KcV2SfWkmHnc845qPYXHXcha99ByRWBQdBbqOluk/ed/HX6yrlIKbykpfOsXYlrG8eNd8AKK1\nEU4cPwHVfhrsT/DZ7FsxPQZLXl0KpRKydtOgo3/MuZM13etZ/d03ROsbQClE1+YAd1QK4JJBzXUx\nvd7DDOKpA+gIxphmnu1cCq7gi8Ww0n307NjGpJbjBm39vipw3d+LUsAwzh5JDYwvK4GaWjZs2cjC\nZS8gImRyWRYsWYyUSoSqqog2txBtOZaQvxpdU9zz+GMkDiQREZas7OKDrz6npr5hwJnjILoeqxSA\nAYTKikcpfDW1PLzseWa0TuOprk66VnQSmzARXJdyexER6kY38sGqj7jKsvj7Lbcx94l/Ylb58BkG\nTpkF8I2EgcFidUUwvD6wbXrTaTZs/xmUwjAMhvY2TdPBa7Ju21YS6RTiunjNKtxDu6BIxR9BA/rL\nitI0+uN7OXXaH2ifPIUn/rqAEyZPIRnfh1IHfSml6Ev2Eos18Mp9D3LeKady9dl/pK83gWgKRFC2\nA6hCpQBUuGPmaqAdIJvNMsrvZ/szr+IzTQD+u2UTU2+aRbA2QqY3ASIEozEyiTjv/OtpLjuzbdDZ\nSR2z6NmyhcioOlzTi13t60ktXXliJQY+Kiu2laexsWkQHKB13AQQyGzdzKXnXsCfLppBZtdOyOcO\nAweY2DIWu1SkWBuiWBPANfQjz2IGZsEOYB6Abprs/GU7J4xpZsqxYwH4vns9bSe1csZpp/Pk3+5l\n1nnTiUZjXHnhxZTyeZpGNwKwau0PPNT5ElpTI7rXi3IclMjdhXU9v1ZKAcAK4BpN08hns1iOw/Vt\n55DKZvnPqg954PZ5PHTN9Yd9+PK7bzN7/lzaL7ucMU1NvPH1F4jrEgqGcB0HYC3Qmn55RcUaAAgD\nvYCh6To5y6KQiIOhQyAIu3fR0/k2E5tbALByOarOPwOiowa8FCyMSB1Bv78MDjAO2FopgPI4LgDd\nwCwRwdB1fMEQvuoAfq9JSSk+6V7P+MYmdu1P0PHvR/g1l6GmvgHT9OELhvAaxsHRDHOB9wEK63pG\nxEBZFgH3/k+UHg/JRHygzWoKXJfaWANi2wyz+zwH3FpWKjEwdCNaCPwIvAgMDgWnVKKmNkLRthER\nvB4Prm0P5+8eYDFHIcPthMuBScB7hx6KCB5dx2sYw+18q4GpRws+HANl+Qm4FDgduJaBdW00EGSg\ndWeBPcC3wErgk6MFLstvvRIpOovXTCUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMTRUMjI6\nMDk6NDgrMDA6MDAh9xnuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTE0VDIyOjA5OjQ4KzAw\nOjAwUKqhUgAAAABJRU5ErkJggg==" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "32px", height: "24px", viewBox: "0 0 32 24", "enable-background": "new 0 0 32 24" },
        " ",
        React__default['default'].createElement("image", { id: "image0", width: "32", height: "24", x: "0", y: "0", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAMAAACsjQ8GAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAtFBMVEX///8HUlAIGxgWS0UW\nTEUURkAVS0QVTEUVS0UVSkUVR0AWS0QVR0EIbmwIHBsYSEEWS0QWTEQYVU0SSUMUQjwWR0EVR0EW\nTEUWTkcWTEUWTEUWTEUWTEUWTEUWTEUWTEUWTEUWTEUWTkcVSEAWS0QVRkATTkgTPzoZQjsWS0QX\nTEUYWFEWTEUXT0cXTkcXUEgXSUIWTUUVSkMYUkoWTUYWS0QXRj8XUUkXTUYWTkYXT0j///8cqVcC\nAAAALHRSTlMAAAAAAAAAAAAAAAAAAACK6uyOho83Mu/s6+zz7fHy/hoNDUQNP4uWkfP1leNLk5QA\nAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQIBhQPAPUYyAAAAJ1J\nREFUKM/N0kcTgkAMhmEUEBV7A2wUsX+i4q7t//8wr0ng4knfa56Z3cnEMP6hSrcHUX9QJWB4yiTI\nziMCLtexabHMSX4jQGm75tRJTsPWIMCDH0xZgY8ZAXOUtPgGeFgWYk+EiGJRhJAAwCoEMBDLeSxA\nIkHCgNJNl8/dllYE3NUq5X9M1/mDgM1TyS283lsC2ru9BIdj54f3V+wDizknjbSuOxcAAAAldEVY\ndGRhdGU6Y3JlYXRlADIwMjEtMDQtMDhUMDY6MjA6MTUrMDA6MDDn1Nm6AAAAJXRFWHRkYXRlOm1v\nZGlmeQAyMDIxLTA0LTA4VDA2OjIwOjE1KzAwOjAwlolhBgAAAABJRU5ErkJggg==" })));
};

var Icon$1a = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("g", { fillRule: "evenodd" },
        React__default['default'].createElement("path", { d: "M11.549 18.906c3.81 0 6.906-3.09 6.906-6.906A6.908 6.908 0 006.509 7.278a6.909 6.909 0 005.04 11.628zm-2.41-4.173c.063-.225.122-.455.196-.676.083-.26.152-.294.392-.166.411.215.842.333 1.297.391.294.035.583.005.853-.112.51-.22.587-.808.156-1.166a1.937 1.937 0 00-.484-.284c-.446-.196-.911-.343-1.328-.598-.68-.406-1.117-.97-1.063-1.797.06-.94.588-1.523 1.45-1.837.353-.127.358-.122.358-.495v-.377c.005-.279.054-.328.333-.338.088-.005.171 0 .26 0 .592 0 .592 0 .597.593 0 .421 0 .421.421.485.319.049.627.142.921.274.162.074.225.186.176.358-.073.254-.142.514-.225.769-.078.24-.152.274-.382.161a2.904 2.904 0 00-1.46-.289 1.096 1.096 0 00-.391.079c-.441.19-.515.68-.138.984.191.152.407.265.632.358.392.161.784.318 1.156.524 1.185.656 1.504 2.14.671 3.154a2.25 2.25 0 01-1.15.74c-.202.054-.29.161-.28.367.01.206 0 .407 0 .612 0 .182-.093.28-.274.284-.22.005-.441.005-.657 0-.19-.004-.284-.112-.284-.298 0-.147-.005-.3-.005-.446-.005-.328-.014-.343-.328-.392-.406-.064-.803-.157-1.17-.338-.304-.147-.333-.22-.25-.524z" }),
        React__default['default'].createElement("path", { d: "M19.028 19.484c-3.987 3.987-10.389 4.12-14.537.407h1.332v-1.42H2.042V22.25h1.42v-1.376A11.967 11.967 0 0011.544 24c3.076 0 6.147-1.17 8.488-3.512l.504-.504-1.004-1.004-.504.504zM19.635 1.749v1.376A11.967 11.967 0 0011.553 0C8.478 0 5.407 1.17 3.065 3.512l-.5.5L3.57 5.015l.504-.505C8.061.524 14.463.391 18.611 4.104H17.28v1.42H21.06V1.75h-1.425z" })))); };

var Icon$1b = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M10.797 17.41a.703.703 0 11-.001 1.406.703.703 0 01.001-1.405m11.02-4.347a.703.703 0 11.002-1.405.703.703 0 01-.002 1.405m0-2.874a2.176 2.176 0 00-2.173 2.173c0 .233.039.465.115.691l-7.178 3.821a2.164 2.164 0 00-1.784-.936c-.828 0-1.583.474-1.948 1.215l-6.45-3.4c-.68-.358-1.19-1.48-1.137-2.502.028-.532.213-.946.493-1.106.178-.1.392-.092.619.027l.043.023c1.709.9 7.301 3.846 7.537 3.955.363.168.565.236 1.184-.057l11.56-6.013c.17-.064.368-.226.368-.472 0-.342-.354-.477-.355-.477-.657-.316-1.668-.789-2.654-1.25-2.107-.987-4.495-2.105-5.544-2.654-.905-.474-1.634-.075-1.764.006l-.253.125C7.776 5.693 1.46 8.822 1.1 9.041.456 9.432.057 10.213.006 11.182c-.081 1.537.703 3.138 1.823 3.726l6.82 3.517a2.174 2.174 0 002.148 1.86 2.176 2.176 0 002.173-2.14l7.51-4.07a2.176 2.176 0 003.51-1.712 2.176 2.176 0 00-2.173-2.173", fillRule: "evenodd" }))); };

var Icon$1c = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.304.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12", fillRule: "evenodd" }))); };

var Icon$1d = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
    React__default['default'].createElement("path", { d: "M28 25V10a1 1 0 00-1-1h-4a1 1 0 00-1 1v15h-2V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v19h-2V15a1 1 0 00-1-1H7a1 1 0 00-1 1v10H4V5H2v21a1 1 0 001 1h27v-2zm-4-14h2v14h-2zm-8-4h2v18h-2zm-8 9h2v9H8z" }))); };

var Icon$1e = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("g", { fillRule: "evenodd" },
        React__default['default'].createElement("path", { d: "M9.822 16.437l6.716-8.467-5.934-1.717-4.164 7.979z" }),
        React__default['default'].createElement("path", { d: "M21.428 8.124a1.309 1.309 0 00-1.839.213l-9.198 11.596-7.371-4.806 6.853-13.13A1.31 1.31 0 007.552.784L.149 14.97a1.31 1.31 0 00.445 1.702l9.367 6.106c.566.369 1.32.246 1.74-.283l9.94-12.532a1.31 1.31 0 00-.213-1.839zM22.635 13.414c-.723 0-1.31 2.07-1.31 2.793a1.31 1.31 0 002.62 0c0-.723-.587-2.793-1.31-2.793z" })))); };

var Icon$1f = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
    React__default['default'].createElement("path", { d: "M0 10H6V16H0z" }),
    React__default['default'].createElement("path", { d: "M0 19.917H6V25.917H0z" }),
    React__default['default'].createElement("path", { d: "M0 30.084H6V36.084H0z" }),
    React__default['default'].createElement("path", { d: "M10 10H48V16H10z" }),
    React__default['default'].createElement("path", { d: "M10 19.917H48V25.917H10z" }),
    React__default['default'].createElement("path", { d: "M10 30.084H48V36.084H10z" }))); };

var Icon$1g = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M13.545 11.826c0 3.76-3.028 6.81-6.763 6.81-3.736 0-6.764-3.048-6.764-6.81 0-3.762 3.029-6.81 6.764-6.81 3.735 0 6.763 3.049 6.763 6.81zm7.42 0c0 3.54-1.514 6.41-3.382 6.41-1.867 0-3.381-2.87-3.381-6.41s1.514-6.41 3.381-6.41c1.868 0 3.382 2.87 3.382 6.41zm3.035 0c0 3.172-.533 5.743-1.19 5.743-.656 0-1.189-2.572-1.189-5.743 0-3.172.533-5.744 1.19-5.744.657 0 1.189 2.572 1.189 5.744z", fillRule: "evenodd" }))); };

var Icon$1h = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 15" }, props),
    React__default['default'].createElement("g", { fillRule: "nonzero", fill: "none" },
        React__default['default'].createElement("path", { d: "M0 14.777s4.667-.341 6.375-3.984C8.083 7.15 7.798.035 16.108.035c1.822 0 3.818.862 4.91 1.622 5.478 3.814 2.888 11.64-3.544 9.634 0 0 2.334-.1 2.334-3.173 0-3.074-3.848-3.53-4.44-.968-.421 1.825-.17 7.343 7.855 7.627", fill: "#88E2DB" }),
        React__default['default'].createElement("path", { d: "M17.474 11.291c1.992 0 5.891-3.088 3.526-6.768-1.654-2.573-6.172-3.093-9.388.123C8.399 7.858 10.298 14.082.03 14.775c.4-.037 4.718-.51 6.345-3.982C8.083 7.15 7.798.035 16.108.035c1.822 0 3.817.862 4.91 1.622 5.478 3.814 2.888 11.64-3.544 9.634z", fill: "#A5F2EA" }),
        React__default['default'].createElement("path", { d: "M19.06 11.6c4.601-.341 5.9-6.644 1.16-9.943C19.19.941 17.36.134 15.628.044c.157-.006.318-.009.481-.009 1.822 0 3.817.862 4.91 1.622 5.002 3.483 3.277 10.31-1.957 9.943z", fill: "#C9F7F1" }),
        React__default['default'].createElement("path", { d: "M23.223 14.777h-10.64c-1.195-.496-1.668-2.24-1.028-4.838.71-2.886 2.094-4.442 4.155-4.781a3.872 3.872 0 012.811.607c-1.176-.63-2.787-.199-3.153 1.385-.422 1.825-.17 7.343 7.855 7.627z", fill: "#73C6BE" })))); };

var Icon$1i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "24px", height: "24px", viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M2.83 23.96 c-0.19 -0.05 -0.34 -0.15 -0.45 -0.32 -0.08 -0.13 -0.09 -0.36 -0.09 -5.53 l0 -5.40 -0.88 -0.02 c-0.98 -0.02 -1.11 -0.05 -1.28 -0.33 -0.19 -0.31 -0.21 -0.28 1.55 -4.51 0.90 -2.18 1.69 -4.05 1.73 -4.15 0.06 -0.11 0.16 -0.22 0.28 -0.28 0.10 -0.05 1.97 -0.83 4.15 -1.73 2.96 -1.22 4.01 -1.64 4.15 -1.64 0.14 0 1.20 0.42 4.15 1.64 2.18 0.90 4.05 1.69 4.15 1.73 0.11 0.06 0.22 0.16 0.28 0.28 0.05 0.10 0.83 1.97 1.73 4.15 1.75 4.24 1.74 4.20 1.55 4.51 -0.17 0.28 -0.30 0.31 -1.27 0.33 l-0.88 0.02 0 5.39 c0 6.02 0.03 5.55 -0.33 5.77 -0.16 0.10 -0.20 0.10 -2.14 0.12 l-1.98 0.01 0 -4.24 0 -4.24 -0.11 -0.20 c-0.21 -0.40 0.19 -0.38 -5.14 -0.38 -5.33 0 -4.93 -0.03 -5.14 0.38 l-0.11 0.20 0 4.24 0 4.23 -1.88 -0 c-1.04 -0 -1.95 -0.02 -2.03 -0.04z m11.79 -13.61 c0.08 -0.06 0.20 -0.17 0.25 -0.24 0.10 -0.13 0.10 -0.17 0.10 -2.63 0 -2.45 0 -2.50 -0.10 -2.63 -0.05 -0.07 -0.15 -0.17 -0.22 -0.22 -0.13 -0.10 -0.18 -0.10 -2.65 -0.10 -2.47 0 -2.53 0 -2.65 0.10 -0.07 0.05 -0.17 0.15 -0.22 0.22 -0.10 0.13 -0.10 0.18 -0.10 2.63 0 2.47 0 2.50 0.10 2.63 0.05 0.07 0.17 0.18 0.25 0.24 l0.15 0.10 2.47 0 2.47 0 0.15 -0.10z" }),
        React__default['default'].createElement("path", { d: "M10.45 7.48 l0 -1.52 1.55 0 1.55 0 0 1.52 0 1.52 -1.55 0 -1.55 0 0 -1.52z" }),
        React__default['default'].createElement("path", { d: "M10.61 22.61 l1.39 -1.40 1.39 1.40 1.40 1.39 -2.79 0 -2.79 0 1.40 -1.39z" }),
        React__default['default'].createElement("path", { d: "M8.20 20.17 l0 -2.76 1.38 1.38 1.38 1.38 -1.37 1.37 c-0.75 0.75 -1.38 1.37 -1.38 1.37 -0.01 0 -0.01 -1.24 -0.01 -2.75z" }),
        React__default['default'].createElement("path", { d: "M14.40 21.55 l-1.37 -1.37 1.38 -1.38 1.38 -1.38 0 2.76 c0 1.51 -0 2.75 -0.01 2.75 -0 0 -0.63 -0.62 -1.38 -1.37z" }),
        React__default['default'].createElement("path", { d: "M10.62 17.77 l-1.36 -1.36 2.74 0 2.74 0 -1.36 1.36 c-0.75 0.75 -1.37 1.36 -1.38 1.36 -0.01 0 -0.64 -0.61 -1.38 -1.36z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$R,
    GroupsIcon: Icon$S,
    HamburgerIcon: Icon$T,
    HamburgerCloseIcon: Icon$U,
    HomeIcon: Icon$V,
    IfoIcon: Icon$W,
    InfoIcon: Icon$X,
    LanguageIcon: Icon$Y,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$Z,
    MoreIcon: Icon$_,
    NftIcon: Icon$$,
    PoolIcon: Icon$10,
    SunIcon: Icon$11,
    TelegramIcon: Icon$12,
    TicketIcon: Icon$13,
    TradeIcon: Icon$14,
    TwitterIcon: Icon$15,
    AuditIcon: Icon$16,
    GooseIcon: Icon$17,
    ZCoreIcon: Icon$18,
    CCIcon: Icon$19,
    ExchangeIcon: Icon$1a,
    GitbookIcon: Icon$1b,
    GithubIcon: Icon$1c,
    GraphIcon: Icon$1d,
    LiquidityIcon: Icon$1e,
    ListingIcon: Icon$1f,
    MediumIcon: Icon$1g,
    WaveIcon: Icon$1h,
    BarnIcon: Icon$1i
});

var MenuButton = styled__default['default'](Button)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$B;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$r, { className: "mobile-icon" }),
        React__default['default'].createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$U, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$T, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$2 = React__default['default'].memo(Logo$1, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$C;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.pancakeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/pancakeswap",
            },
            {
                label: "Docs",
                href: "https://docs.pancakeswap.finance",
            },
            {
                label: "Blog",
                href: "https://pancakeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/ZCoreFinance",
            },
            {
                label: "Português",
                href: "hhttps://t.me/ZCoreFinancePT",
            },
            {
                label: "Announcements",
                href: "https://t.me/ZCoreCrypto",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/zcorecrypto",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$D, templateObject_2$d, templateObject_3$7;

var Container$2 = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React__default['default'].memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$E, templateObject_2$e;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    var isZCore = (href === null || href === void 0 ? void 0 : href.startsWith("https://exchange.zcore.network")) || (href === null || href === void 0 ? void 0 : href.startsWith("https://app.zcore.network")) || (href === null || href === void 0 ? void 0 : href.startsWith("https://zefi.zcore.network")) || (href === null || href === void 0 ? void 0 : href.startsWith("/")) || (href === null || href === void 0 ? void 0 : href.startsWith("https://swap.zcore.network"));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    if (isZCore) {
        return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
    }
    else {
        return React__default['default'].createElement(Tag, __assign({ target: "_blank" }, props, otherProps));
    }
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$F;

var PriceLink = styled__default['default'].a(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React__default['default'].createElement(PriceLink, { href: "https://bscscan.com/token/0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07", target: "_blank" },
        React__default['default'].createElement(Icon$y, { width: "24px", mr: "8px" }),
        React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React__default['default'].memo(CakePrice);
var templateObject_1$G;

var PriceLink$1 = styled__default['default'].a(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePriceBoost = function (_a) {
    // const newcakePriceUsd = 0;
    var cakePriceUsd = _a.cakePriceUsd;
    var api = "https://finance.zcore.network/lp";
    var _b = React.useState(0.0), newcakePriceUsd = _b[0], setData = _b[1];
    React.useEffect(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, response_json, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(api)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        response_json = _a.sent();
                        setData(response_json.lp_price * 0.3);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Unable to fetch price data:", error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, [setData]);
    return cakePriceUsd ? (React__default['default'].createElement(PriceLink$1, { href: "https://zefi.zcore.network/ifo" },
        React__default['default'].createElement(Icon$z, { width: "24px", mr: "8px" }),
        React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + newcakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePriceBoost$1 = React__default['default'].memo(CakePriceBoost);
var templateObject_1$H;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon;
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React__default['default'].createElement(Flex, { alignItems: "center" },
            React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
var ThemeSwitcher$1 = React__default['default'].memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Icons$2 = IconModule;
var SocialLinks = function () { return (React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$2[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React__default['default'].createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React__default['default'].memo(SocialLinks, function () { return true; });

var Icons$3 = IconModule;
Icons$3.LanguageIcon;
var LangSelector = function (_a) {
    _a.currentLang; _a.langs; _a.setLang;
    return React__default['default'].createElement(React__default['default'].Fragment, null);
};
var LangSelector$1 = React__default['default'].memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container$4 = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled__default['default'].div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, newcakePriceUsd = _a.newcakePriceUsd;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$m, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement(SocialEntry, null,
            React__default['default'].createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd }),
            React__default['default'].createElement(CakePriceBoost$1, { cakePriceUsd: newcakePriceUsd })),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(ThemeSwitcher$1, { isDark: isDark, toggleTheme: toggleTheme }),
            React__default['default'].createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }),
            React__default['default'].createElement(SocialLinks$1, null))));
};
var templateObject_1$I, templateObject_2$f, templateObject_3$8;

var StyledPanel = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$J;

var Icon$1j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$1k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$1l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$1m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React__default['default'].createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1j,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$1m,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$1k,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$1l,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$1n,
        connectorId: exports.ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1o,
        connectorId: exports.ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1p,
        connectorId: exports.ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$p, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$K;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$o, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$L, templateObject_2$g;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React__default['default'].memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });

var Wrapper$1 = styled__default['default'].div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links; _a.profile; var children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$2, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock$1, { account: account, login: login, logout: logout }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$M, templateObject_2$h, templateObject_3$9, templateObject_4$4, templateObject_5$3;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$4;
var alertTypeMap = (_a$4 = {},
    _a$4[types.INFO] = variants$1.INFO,
    _a$4[types.SUCCESS] = variants$1.SUCCESS,
    _a$4[types.DANGER] = variants$1.DANGER,
    _a$4[types.WARNING] = variants$1.WARNING,
    _a$4);
var StyledToast = styled__default['default'].div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$N;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$O;

var ResetCSS = styled.createGlobalStyle(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$P;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#0f5f54",
    primaryBright: "#0f5f54",
    primaryDark: "#0f5f54",
    secondary: "#0e3731",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#f1f0f0", backgroundDisabled: "#E9EAEB", contrast: "#0b2b27", invertedContrast: "#FFFFFF", input: "#ebf4ea", tertiary: "#EFF4F5", text: "#0e3731", textDisabled: "#BDC2C4", textSubtle: "#1e5951", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #e6ffe7 0%, #efffef 100%)",
    }, inputSecondary: "#caecd1" });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#0f5f54", background: "#343135", backgroundDisabled: "#28a392", contrast: "#FFFFFF", invertedContrast: "#0d4039", input: "#0098A1", primaryDark: "#0098A1", tertiary: "#28a392", text: "#FFFFFF", textDisabled: "#cccccc", textSubtle: "#c9c4d4", borderColor: "#28a392", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #0f5f54 0%, #0e3731 100%)",
    }, inputSecondary: "#5b8d57" });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var light$1 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$1 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$2 = {
    handleBackground: lightColors.card,
};
var dark$2 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    background: lightColors.card,
    hover: "#ebf4ea",
};
var dark$4 = {
    background: darkColors.card,
    hover: "#3d5d3f",
};

var light$5 = {
    background: lightColors.card,
};
var dark$5 = {
    background: darkColors.card,
};

var light$6 = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark$6 = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, colors: darkColors, card: dark$1, toggle: dark$3, nav: dark$4, modal: dark$5, radio: dark$2, tooltip: dark$6 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, colors: lightColors, card: light$1, toggle: light$3, nav: light$4, modal: light$5, radio: light$2, tooltip: light$6 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.ArrowUpIcon = Icon$a;
exports.AutoRenewIcon = Icon$b;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$c;
exports.BlockIcon = Icon$2;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$d;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$f;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$e;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$g;
exports.ChevronDownIcon = Icon$h;
exports.ChevronLeftIcon = Icon$i;
exports.ChevronRightIcon = Icon$j;
exports.ChevronUpIcon = Icon$k;
exports.CloseIcon = Icon$l;
exports.CogIcon = Icon$m;
exports.CommunityIcon = Icon$n;
exports.CopyIcon = Icon$o;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.FallingBunnies = FallingBunnies;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$p;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$q;
exports.LogoIcon = Icon$r;
exports.LogoRoundIcon = Icon$s;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$t;
exports.MinusIcon = Icon$u;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.NoProfileAvatarIcon = Icon$v;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$w;
exports.PancakeRoundBoost = Icon$z;
exports.PancakeRoundIcon = Icon$y;
exports.PancakesIcon = Icon$x;
exports.PlayCircleOutlineIcon = Icon$A;
exports.PrizeIcon = Icon$B;
exports.Progress = Progress;
exports.ProgressBunny = Icon$E;
exports.Radio = Radio;
exports.RemoveIcon = Icon$C;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$K;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$L;
exports.SyncAltIcon = Icon$M;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$H;
exports.TicketRound = Icon$I;
exports.TimerIcon = Icon$J;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$D;
exports.WaitIcon = Icon$F;
exports.WarningIcon = Icon$N;
exports.Won = Icon$G;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
