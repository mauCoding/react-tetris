export const Action = {
    Left: "Left",
    FastDrop: "FastDrop",
    Pause: "Pause",
    Quit: "Quit",
    Right: "Right",
    Rotate: "Rotate",
    SlowDrop: "SlowDrop"
};

export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.SlowDrop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    Escape: Action.Quit,
    KeyP: Action.Pause,
    Space: Action.FastDrop
};

export const actionDrop = (action) => {
    [Action.SlowDrop, Action.FastDrop].includes(action)
}

export const actionKey = (keyCode) => Key[keyCode];
