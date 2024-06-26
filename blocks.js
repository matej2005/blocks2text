

let UnOp = {
    opcode: function (self) {
        return ({
            Not: "operator_not",
            Length: "operator_length",
            Round: "operator_round",
            Abs: "operator_mathop",
            Floor: "operator_mathop",
            Ceil: "operator_mathop",
            Sqrt: "operator_mathop",
            Sin: "operator_mathop",
            Cos: "operator_mathop",
            Tan: "operator_mathop",
            Asin: "operator_mathop",
            Acos: "operator_mathop",
            Atan: "operator_mathop",
            Ln: "operator_mathop",
            Log: "operator_mathop",
            AntiLn: "operator_mathop",
            AntiLog: "operator_mathop",
        })[self] || null;
    },
    input: function (self) {
        return ({
            Not: "OPERAND",
            Length: "STRING",
            Round: "NUM",
            Abs: "NUM",
            Floor: "NUM",
            Ceil: "NUM",
            Sqrt: "NUM",
            Sin: "NUM",
            Cos: "NUM",
            Tan: "NUM",
            Asin: "NUM",
            Acos: "NUM",
            Atan: "NUM",
            Ln: "NUM",
            Log: "NUM",
            AntiLn: "NUM",
            AntiLog: "NUM",
        })[self] || null;
    },
    fields: function (self) {
        return ({
            Not: null,
            Length: null,
            Round: null,
            Abs: "{\"OPERATOR\": [\"abs\", null]}",
            Floor: "{\"OPERATOR\": [\"floor\", null]}",
            Ceil: "{\"OPERATOR\": [\"ceil\", null]}",
            Sqrt: "{\"OPERATOR\": [\"sqrt\", null]}",
            Sin: "{\"OPERATOR\": [\"sin\", null]}",
            Cos: "{\"OPERATOR\": [\"cos\", null]}",
            Tan: "{\"OPERATOR\": [\"tan\", null]}",
            Asin: "{\"OPERATOR\": [\"asin\", null]}",
            Acos: "{\"OPERATOR\": [\"acos\", null]}",
            Atan: "{\"OPERATOR\": [\"atan\", null]}",
            Ln: "{\"OPERATOR\": [\"ln\", null]}",
            Log: "{\"OPERATOR\": [\"log\", null]}",
            AntiLn: "{\"OPERATOR\": [\"e ^\", null]}",
            AntiLog: "{\"OPERATOR\": [\"10 ^\", null]}",
        })[self] || null;
    }

};

let BinOp = {
    opcode: function (self) {
        return {
            operator_add: "Add",
            operator_subtract: "Sub",
            operator_multiply: "Mul",
            operator_divide: "Div",
            operator_mod: "Mod",
            operator_lt: "Lt",
            operator_gt: "Gt",
            operator_equals: "Eq",
            operator_and: "And",
            operator_or: "Or",
            operator_join: "Join",
            operator_contains: "In",
            operator_letter_of: "Of",
            _: null,
        }
    },
    lhs: function (self){//left argument
        return {
            Add: "NUM1",
            Sub: "NUM1",
            Mul: "NUM1",
            Div: "NUM1",
            Mod: "NUM1",
            Lt: "OPERAND1",
            Gt: "OPERAND1",
            Eq: "OPERAND1",
            And: "OPERAND1",
            Or: "OPERAND1",
            Join: "STRING1",
            In: "STRING1",
            Of: "STRING",
            _: null,
        }
    },
    rhs: function (self){//right argument
        return {
            Add: "NUM2",
            Sub: "NUM2",
            Mul: "NUM2",
            Div: "NUM2",
            Mod: "NUM2",
            Lt: "OPERAND2",
            Gt: "OPERAND2",
            Eq: "OPERAND2",
            And: "OPERAND2",
            Or: "OPERAND2",
            Join: "STRING2",
            In: "STRING2",
            Of: "LETTER",
            _: null,
        }
    }
}
let Block2 = {
    menu: function (self) {
        return ({

        })[self] || null;
    },
    overloads: function (self) {
        return ({

        })[self] || null;
    },
    from_shape: function (self) {
        return ({

        })[self] || null;
    },
    name: function (self) {
        return ({
            Move: "move",
            TurnLeft: "turn_left",
            TurnRight: "turn_right",
            GotoRandomPosition: "goto_random_position",
            GotoMousePointer: "goto_mouse_pointer",
            Goto1: "goto",
            Goto2: "goto",
            Glide3: "glide",
            Glide2: "glide",
            GlideToRandomPosition: "glide_to_random_position",
            GlideToMousePointer: "glide_to_mouse_pointer",
            PointInDirection: "point_in_direction",
            PointTowardsMousePointer: "point_towards_mouse_pointer",
            PointTowardsRandomDirection: "point_towards_random_direction",
            PointTowards: "point_towards",
            ChangeX: "change_x",
            SetX: "set_x",
            ChangeY: "change_y",
            SetY: "set_y",
            IfOnEdgeBounce: "if_on_edge_bounce",
            SetRotationStyleLeftRight: "set_rotation_style_left_right",
            SetRotationStyleDoNotRotate: "set_rotation_style_do_not_rotate",
            SetRotationStyleAllAround: "set_rotation_style_all_around",
            Say2: "say",
            Say1: "say",
            Think2: "think",
            Think1: "think",
            SwitchCostume: "switch_costume",
            NextCostume: "next_costume",
            SwitchBackdrop: "switch_backdrop",
            NextBackdrop: "next_backdrop",
            SetSize: "set_size",
            ChangeSize: "change_size",
            ChangeColorEffect: "change_color_effect",
            ChangeFisheyeEffect: "change_fisheye_effect",
            ChangeWhirlEffect: "change_whirl_effect",
            ChangePixelateEffect: "change_pixelate_effect",
            ChangeMosaicEffect: "change_mosaic_effect",
            ChangeBrightnessEffect: "change_brightness_effect",
            ChangeGhostEffect: "change_ghost_effect",
            SetColorEffect: "set_color_effect",
            SetFisheyeEffect: "set_fisheye_effect",
            SetWhirlEffect: "set_whirl_effect",
            SetPixelateEffect: "set_pixelate_effect",
            SetMosaicEffect: "set_mosaic_effect",
            SetBrightnessEffect: "set_brightness_effect",
            SetGhostEffect: "set_ghost_effect",
            ClearGraphicEffects: "clear_graphic_effects",
            Show: "show",
            Hide: "hide",
            GotoFront: "goto_front",
            GotoBack: "goto_back",
            GoForward: "go_forward",
            GoBackward: "go_backward",
            PlaySoundUntilDone: "play_sound_until_done",
            StartSound: "start_sound",
            StopAllSounds: "stop_all_sounds",
            ChangePitchEffect: "change_pitch_effect",
            ChangePanEffect: "change_pan_effect",
            SetPitchEffect: "set_pitch_effect",
            SetPanEffect: "set_pan_effect",
            ChangeVolume: "change_volume",
            SetVolume: "set_volume",
            ClearSoundEffects: "clear_sound_effects",
            Broadcast: "broadcast",
            BroadcastAndWait: "broadcast_and_wait",
            Wait: "wait",
            WaitUntil: "wait_until",
            StopAll: "stop_all",
            StopThisScript: "stop_this_script",
            StopOtherScripts: "stop_other_scripts",
            DeleteThisClone: "delete_this_clone",
            Clone0: "clone",
            Clone1: "clone",
            Ask: "ask",
            SetDragModeDraggable: "set_drag_mode_draggable",
            SetDragModeNotDraggable: "set_drag_mode_not_draggable",
            ResetTimer: "reset_timer",
            EraseAll: "erase_all",
            Stamp: "stamp",
            PenDown: "pen_down",
            PenUp: "pen_up",
            SetPenColor: "set_pen_color",
            ChangePenSize: "change_pen_size",
            SetPenSize: "set_pen_size",
            Rest: "rest",
            SetTempo: "set_tempo",
            ChangeTempo: "change_tempo",
        })[self] || null;
    },
    all_names: function (self) {
        return [
            "move",
            "turn_left",
            "turn_right",
            "goto_random_position",
            "goto_mouse_pointer",
            "goto",
            "glide",
            "glide_to_random_position",
            "glide_to_mouse_pointer",
            "point_in_direction",
            "point_towards_mouse_pointer",
            "point_towards_random_direction",
            "point_towards",
            "change_x",
            "set_x",
            "change_y",
            "set_y",
            "if_on_edge_bounce",
            "set_rotation_style_left_right",
            "set_rotation_style_do_not_rotate",
            "set_rotation_style_all_around",
            "say",
            "think",
            "switch_costume",
            "next_costume",
            "switch_backdrop",
            "next_backdrop",
            "set_size",
            "change_size",
            "change_color_effect",
            "change_fisheye_effect",
            "change_whirl_effect",
            "change_pixelate_effect",
            "change_mosaic_effect",
            "change_brightness_effect",
            "change_ghost_effect",
            "set_color_effect",
            "set_fisheye_effect",
            "set_whirl_effect",
            "set_pixelate_effect",
            "set_mosaic_effect",
            "set_brightness_effect",
            "set_ghost_effect",
            "clear_graphic_effects",
            "show",
            "hide",
            "goto_front",
            "goto_back",
            "go_forward",
            "go_backward",
            "play_sound_until_done",
            "start_sound",
            "stop_all_sounds",
            "change_pitch_effect",
            "change_pan_effect",
            "set_pitch_effect",
            "set_pan_effect",
            "change_volume",
            "set_volume",
            "clear_sound_effects",
            "broadcast",
            "broadcast_and_wait",
            "wait",
            "wait_until",
            "stop_all",
            "stop_this_script",
            "stop_other_scripts",
            "delete_this_clone",
            "clone",
            "ask",
            "set_drag_mode_draggable",
            "set_drag_mode_not_draggable",
            "reset_timer",
            "erase_all",
            "stamp",
            "pen_down",
            "pen_up",
            "set_pen_color",
            "change_pen_size",
            "set_pen_size",
            "rest",
            "set_tempo",
            "change_tempo",
        ];
    },
    opcode: function (self) {//op to gs
        return ({
            motion_movesteps: "Move",
            motion_turnleft: "TurnLeft",
            motion_turnright: "TurnRight",
            motion_goto: "GotoRandomPosition",
            motion_goto: "GotoMousePointer",
            motion_goto: "Goto1",
            motion_gotoxy: "Goto2",
            motion_glidesecstoxy: "Glide3",
            motion_glideto: "Glide2",
            motion_glideto: "GlideToRandomPosition",
            motion_glideto: "GlideToMousePointer",
            motion_pointindirection: "PointInDirection",
            motion_pointtowards: "PointTowardsMousePointer",
            motion_pointtowards: "PointTowardsRandomDirection",
            motion_pointtowards: "PointTowards",
            motion_changexby: "ChangeX",
            motion_setx: "SetX",
            motion_changeyby: "ChangeY",
            motion_sety: "SetY",
            motion_ifonedgebounce: "IfOnEdgeBounce",
            motion_setrotationstyle: "SetRotationStyleLeftRight",
            motion_setrotationstyle: "SetRotationStyleDoNotRotate",
            motion_setrotationstyle: "SetRotationStyleAllAround",
            looks_sayforsecs: "Say2",
            looks_say: "Say1",
            looks_thinkforsecs: "Think2",
            looks_think: "Think1",
            looks_switchcostumeto: "SwitchCostume",
            looks_nextcostume: "NextCostume",
            looks_switchbackdropto: "SwitchBackdrop",
            looks_nextbackdrop: "NextBackdrop",
            looks_setsizeto: "SetSize",
            looks_changesizeby: "ChangeSize",
            looks_changeeffectby: "ChangeColorEffect",
            looks_changeeffectby: "ChangeFisheyeEffect",
            looks_changeeffectby: "ChangeWhirlEffect",
            looks_changeeffectby: "ChangePixelateEffect",
            looks_changeeffectby: "ChangeMosaicEffect",
            looks_changeeffectby: "ChangeBrightnessEffect",
            looks_changeeffectby: "ChangeGhostEffect",
            looks_seteffectto: "SetColorEffect",
            looks_seteffectto: "SetFisheyeEffect",
            looks_seteffectto: "SetWhirlEffect",
            looks_seteffectto: "SetPixelateEffect",
            looks_seteffectto: "SetMosaicEffect",
            looks_seteffectto: "SetBrightnessEffect",
            looks_seteffectto: "SetGhostEffect",
            looks_cleargraphiceffects: "ClearGraphicEffects",
            looks_show: "Show",
            looks_hide: "Hide",
            looks_gotofrontback: "GotoFront",
            looks_gotofrontback: "GotoBack",
            looks_goforwardbackwardlayers: "GoForward",
            looks_goforwardbackwardlayers: "GoBackward",
            sound_playuntildone: "PlaySoundUntilDone",
            sound_play: "StartSound",
            sound_stopallsounds: "StopAllSounds",
            sound_changeeffectby: "ChangePitchEffect",
            sound_changeeffectby: "ChangePanEffect",
            sound_seteffectto: "SetPitchEffect",
            sound_seteffectto: "SetPanEffect",
            sound_changevolumeby: "ChangeVolume",
            sound_setvolumeto: "SetVolume",
            sound_cleareffects: "ClearSoundEffects",
            event_broadcast: "Broadcast",
            event_broadcastandwait: "BroadcastAndWait",
            control_wait: "Wait",
            control_wait_until: "WaitUntil",
            control_stop: "StopAll",
            control_stop: "StopThisScript",
            control_stop: "StopOtherScripts",
            control_delete_this_clone: "DeleteThisClone",
            control_create_clone_of: "Clone0",
            control_create_clone_of: "Clone1",
            sensing_askandwait: "Ask",
            sensing_setdragmode: "SetDragModeDraggable",
            sensing_setdragmode: "SetDragModeNotDraggable",
            sensing_resettimer: "ResetTimer",
            pen_clear: "EraseAll",
            pen_stamp: "Stamp",
            pen_penDown: "PenDown",
            pen_penUp: "PenUp",
            pen_setPenColorToColor: "SetPenColor",
            pen_changePenSizeBy: "ChangePenSize",
            pen_setPenSizeTo: "SetPenSize",
            music_restForBeats: "Rest",
            music_setTempo: "SetTempo",
            music_changeTempo: "ChangeTempo"
        })[self] || null;
    },
    args: function (self) {
        return ({
            Move: ["STEPS"],
            TurnLeft: ["DEGREES"],
            TurnRight: ["DEGREES"],
            GotoRandomPosition: [],
            GotoMousePointer: [],
            Goto1: ["TO"],
            Goto2: ["X", "Y"],
            Glide3: ["X", "Y", "SECS"],
            Glide2: ["TO", "SECS"],
            GlideToRandomPosition: ["SECS"],
            GlideToMousePointer: ["SECS"],
            PointInDirection: ["DIRECTION"],
            PointTowardsMousePointer: [],
            PointTowardsRandomDirection: [],
            PointTowards: ["TOWARDS"],
            ChangeX: ["DX"],
            SetX: ["X"],
            ChangeY: ["DY"],
            SetY: ["Y"],
            IfOnEdgeBounce: [],
            SetRotationStyleLeftRight: [],
            SetRotationStyleDoNotRotate: [],
            SetRotationStyleAllAround: [],
            Say2: ["MESSAGE", "SECS"],
            Say1: ["MESSAGE"],
            Think2: ["MESSAGE", "SECS"],
            Think1: ["MESSAGE"],
            SwitchCostume: ["COSTUME"],
            NextCostume: [],
            SwitchBackdrop: ["BACKDROP"],
            NextBackdrop: [],
            SetSize: ["SIZE"],
            ChangeSize: ["CHANGE"],
            ChangeColorEffect: ["CHANGE"],
            ChangeFisheyeEffect: ["CHANGE"],
            ChangeWhirlEffect: ["CHANGE"],
            ChangePixelateEffect: ["CHANGE"],
            ChangeMosaicEffect: ["CHANGE"],
            ChangeBrightnessEffect: ["CHANGE"],
            ChangeGhostEffect: ["CHANGE"],
            SetColorEffect: ["VALUE"],
            SetFisheyeEffect: ["VALUE"],
            SetWhirlEffect: ["VALUE"],
            SetPixelateEffect: ["VALUE"],
            SetMosaicEffect: ["VALUE"],
            SetBrightnessEffect: ["VALUE"],
            SetGhostEffect: ["VALUE"],
            ClearGraphicEffects: [],
            Show: [],
            Hide: [],
            GotoFront: [],
            GotoBack: [],
            GoForward: ["NUM"],
            GoBackward: ["NUM"],
            PlaySoundUntilDone: ["SOUND_MENU"],
            StartSound: ["SOUND_MENU"],
            StopAllSounds: [],
            ChangePitchEffect: ["VALUE"],
            ChangePanEffect: ["VALUE"],
            SetPitchEffect: ["VALUE"],
            SetPanEffect: ["VALUE"],
            ChangeVolume: ["VOLUME"],
            SetVolume: ["VOLUME"],
            ClearSoundEffects: [],
            Broadcast: ["BROADCAST_INPUT"],
            BroadcastAndWait: ["BROADCAST_INPUT"],
            Wait: ["DURATION"],
            WaitUntil: ["CONDITION"],
            StopAll: [],
            StopThisScript: [],
            StopOtherScripts: [],
            DeleteThisClone: [],
            Clone0: [],
            Clone1: ["CLONE_OPTION"],
            Ask: ["QUESTION"],
            SetDragModeDraggable: [],
            SetDragModeNotDraggable: [],
            ResetTimer: [],
            EraseAll: [],
            Stamp: [],
            PenDown: [],
            PenUp: [],
            SetPenColor: ["COLOR"],
            ChangePenSize: ["SIZE"],
            SetPenSize: ["SIZE"],
            Rest: ["BEATS"],
            SetTempo: ["TEMPO"],
            ChangeTempo: ["TEMPO"],
        })[self] || null;
    },
    fields: function (self) {
        return ({
            Move: null,
            TurnLeft: null,
            TurnRight: null,
            GotoRandomPosition: null,
            GotoMousePointer: null,
            Goto1: null,
            Goto2: null,
            Glide3: null,
            Glide2: null,
            GlideToRandomPosition: null,
            GlideToMousePointer: null,
            PointInDirection: null,
            PointTowardsMousePointer: null,
            PointTowardsRandomDirection: null,
            PointTowards: null,
            ChangeX: null,
            SetX: null,
            ChangeY: null,
            SetY: null,
            IfOnEdgeBounce: null,
            SetRotationStyleLeftRight: "{\"STYLE\": [\"left-right\", null]}",
            SetRotationStyleDoNotRotate: "{\"STYLE\": [\"don't rotate\", null]}",
            SetRotationStyleAllAround: "{\"STYLE\": [\"all around\", null]}",
            Say2: null,
            Say1: null,
            Think2: null,
            Think1: null,
            SwitchCostume: null,
            NextCostume: null,
            SwitchBackdrop: null,
            NextBackdrop: null,
            SetSize: null,
            ChangeSize: null,
            ChangeColorEffect: "{\"EFFECT\": [\"COLOR\", null]}",
            ChangeFisheyeEffect: "{\"EFFECT\": [\"FISHEYE\", null]}",
            ChangeWhirlEffect: "{\"EFFECT\": [\"WHIRL\", null]}",
            ChangePixelateEffect: "{\"EFFECT\": [\"PIXELATE\", null]}",
            ChangeMosaicEffect: "{\"EFFECT\": [\"MOSAIC\", null]}",
            ChangeBrightnessEffect: "{\"EFFECT\": [\"BRIGHTNESS\", null]}",
            ChangeGhostEffect: "{\"EFFECT\": [\"GHOST\", null]}",
            SetColorEffect: "{\"EFFECT\": [\"COLOR\", null]}",
            SetFisheyeEffect: "{\"EFFECT\": [\"FISHEYE\", null]}",
            SetWhirlEffect: "{\"EFFECT\": [\"WHIRL\", null]}",
            SetPixelateEffect: "{\"EFFECT\": [\"PIXELATE\", null]}",
            SetMosaicEffect: "{\"EFFECT\": [\"MOSAIC\", null]}",
            SetBrightnessEffect: "{\"EFFECT\": [\"BRIGHTNESS\", null]}",
            SetGhostEffect: "{\"EFFECT\": [\"GHOST\", null]}",
            ClearGraphicEffects: null,
            Show: null,
            Hide: null,
            GotoFront: "{\"FRONT_BACK\": [\"front\", null]}",
            GotoBack: "{\"FRONT_BACK\": [\"back\", null]}",
            GoForward: "{\"FORWARD_BACKWARD\": [\"forward\", null]}",
            GoBackward: "{\"FORWARD_BACKWARD\": [\"backward\", null]}",
            PlaySoundUntilDone: null,
            StartSound: null,
            StopAllSounds: null,
            ChangePitchEffect: "{\"EFFECT\": [\"PITCH\", null]}",
            ChangePanEffect: "{\"EFFECT\": [\"PAN\", null]}",
            SetPitchEffect: "{\"EFFECT\": [\"PITCH\", null]}",
            SetPanEffect: "{\"EFFECT\": [\"PAN\", null]}",
            ChangeVolume: null,
            SetVolume: null,
            ClearSoundEffects: null,
            Broadcast: null,
            BroadcastAndWait: null,
            Wait: null,
            WaitUntil: null,
            StopAll: "{\"STOP_OPTION\": [\"all\", null]}",
            StopThisScript: "{\"STOP_OPTION\": [\"this script\", null]}",
            StopOtherScripts: "{\"STOP_OPTION\": [\"other scripts in sprite\", null]}",
            DeleteThisClone: null,
            Clone0: null,
            Clone1: null,
            Ask: null,
            SetDragModeDraggable: "{\"DRAG_MODE\": [\"draggable\", null]}",
            SetDragModeNotDraggable: "{\"DRAG_MODE\": [\"not draggable\", null]}",
            ResetTimer: null,
            EraseAll: null,
            Stamp: null,
            PenDown: null,
            PenUp: null,
            SetPenColor: null,
            ChangePenSize: null,
            SetPenSize: null,
            Rest: null,
            SetTempo: null,
            ChangeTempo: null,
        })[self] || null;
    }
};
let Repr = {
    menu: function (self) {
        return ({

        })[self] || null;
    },
    overloads: function (self) {
        return ({

        })[self] || null;
    },
    from_shape: function (self) {
        return ({

        })[self] || null;
    },
    name: function (self) {
        return ({
            XPosition: "x_position",
            YPosition: "y_position",
            Direction: "direction",
            Size: "size",
            CostumeNumber: "costume_number",
            CostumeName: "costume_name",
            BackdropNumber: "backdrop_number",
            BackdropName: "backdrop_name",
            Volume: "volume",
            TouchingMousePointer: "touching_mouse_pointer",
            TouchingEdge: "touching_edge",
            Touching: "touching",
            KeyPressed: "key_pressed",
            MouseDown: "mouse_down",
            MouseX: "mouse_x",
            MouseY: "mouse_y",
            Loudness: "loudness",
            Timer: "timer",
            CurrentYear: "current_year",
            CurrentMonth: "current_month",
            CurrentDate: "current_date",
            CurrentDayOfWeek: "current_day_of_week",
            CurrentHour: "current_hour",
            CurrentMinute: "current_minute",
            CurrentSecond: "current_second",
            DaysSince2000: "days_since_2000",
            Username: "username",
            TouchingColor: "touching_color",
            ColorIsTouchingColor: "color_is_touching_color",
            Answer: "answer",
            Random: "random",
        })[self] || null;
    },
    
    all_names: function (self) {
        return [
            'x_position',
            "y_position",
            "direction",
            "size",
            "costume_number",
            "costume_name",
            "backdrop_number",
            "backdrop_name",
            "volume",
            "touching_mouse_pointer",
            "touching_edge",
            "touching",
            "key_pressed",
            "mouse_down",
            "mouse_x",
            "mouse_y",
            "loudness",
            "timer",
            "current_year",
            "current_month",
            "current_date",
            "current_day_of_week",
            "current_hour",
            "current_minute",
            "current_second",
            "days_since_2000",
            "username",
            "touching_color",
            "color_is_touching_color",
            "answer",
            "random",
        ];
    },
    opcode: function (self) {//op to gs
        return ({
            XPosition: "motion_xposition",
            YPosition: "motion_yposition",
            Direction: "motion_direction",
            Size: "looks_size",
            CostumeNumber: "looks_costumenumbername",
            CostumeName: "looks_costumenumbername",
            BackdropNumber: "looks_backdropnumbername",
            BackdropName: "looks_backdropnumbername",
            Volume: "sound_volume",
            TouchingMousePointer: "sensing_touchingobject",
            TouchingEdge: "sensing_touchingobject",
            Touching: "sensing_touchingobject",
            KeyPressed: "sensing_keypressed",
            MouseDown: "sensing_mousedown",
            MouseX: "sensing_mousex",
            MouseY: "sensing_mousey",
            Loudness: "sensing_loudness",
            Timer: "sensing_timer",
            CurrentYear: "sensing_current",
            CurrentMonth: "sensing_current",
            CurrentDate: "sensing_current",
            CurrentDayOfWeek: "sensing_current",
            CurrentHour: "sensing_current",
            CurrentMinute: "sensing_current",
            CurrentSecond: "sensing_current",
            DaysSince2000: "sensing_dayssince2000",
            Username: "sensing_username",
            TouchingColor: "sensing_touchingcolor",
            ColorIsTouchingColor: "sensing_coloristouchingcolor",
            Answer: "sensing_answer",
            Random: "operator_random",
        })[self] || null;
    },
    args: function (self) {
        return ({
            XPosition: [],
            YPosition: [],
            Direction: [],
            Size: [],
            CostumeNumber: [],
            CostumeName: [],
            BackdropNumber: [],
            BackdropName: [],
            Volume: [],
            TouchingMousePointer: [],
            TouchingEdge: [],
            Touching: ["TOUCHINGOBJECTMENU"],
            KeyPressed: ["KEY_OPTION"],
            MouseDown: [],
            MouseX: [],
            MouseY: [],
            Loudness: [],
            Timer: [],
            CurrentYear: [],
            CurrentMonth: [],
            CurrentDate: [],
            CurrentDayOfWeek: [],
            CurrentHour: [],
            CurrentMinute: [],
            CurrentSecond: [],
            DaysSince2000: [],
            Username: [],
            TouchingColor: ["COLOR"],
            ColorIsTouchingColor: ["COLOR", "COLOR2"],
            Answer: [],
            Random: ["FROM", "TO"],
        })[self] || null;
    },
    fields: function (self) {
        return ({
            XPosition: None,
            YPosition: None,
            Direction: None,
            Size: None,
            CostumeNumber: "{\"NUMBER_NAME\": [\"number\", null]}",
            CostumeName: "{\"NUMBER_NAME\": [\"name\", null]}",
            BackdropNumber: "{\"NUMBER_NAME\": [\"number\", null]}",
            BackdropName: "{\"NUMBER_NAME\": [\"name\", null]}",
            Volume: None,
            TouchingMousePointer: None,
            TouchingEdge: None,
            Touching: None,
            KeyPressed: None,
            MouseDown: None,
            MouseX: None,
            MouseY: None,
            Loudness: None,
            Timer: None,
            CurrentYear: "{\"CURRENTMENU\": [\"YEAR\", null]}",
            CurrentMonth: "{\"CURRENTMENU\": [\"MONTH\", null]}",
            CurrentDate: "{\"CURRENTMENU\": [\"DATE\", null]}",
            CurrentDayOfWeek: "{\"CURRENTMENU\": [\"DAYOFWEEK\", null]}",
            CurrentHour: "{\"CURRENTMENU\": [\"HOUR\", null]}",
            CurrentMinute: "{\"CURRENTMENU\": [\"MINUTE\", null]}",
            CurrentSecond: "{\"CURRENTMENU\": [\"SECOND\", null]}",
            DaysSince2000: None,
            Username: None,
            TouchingColor: None,
            ColorIsTouchingColor: None,
            Answer: None,
            Random: None,
        })[self] || null;
    }
};

export { UnOp, BinOp, Block2, Repr };