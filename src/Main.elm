module Main exposing (..)

import Browser
import Element exposing (Element, alignRight, centerX, centerY, el, fill, height, padding, px, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input


main =
    Browser.sandbox
        { init = init
        , view = view
        , update = update
        }


type alias Model =
    { text : String }


type Msg
    = Update Model


update msg model =
    case msg of
        Update new ->
            new


init =
    { text = "Hello and some other text lmao hello!"
    }



-- main2 =
--     Element.layout []
--         layout


white =
    rgb255 255 255 255


gray =
    rgb255 100 100 100


green =
    rgb255 0 200 0


spacingN =
    20


roundness : Int
roundness =
    5


sPadding =
    20


sHeight =
    sPadding * 2 + 14


view model =
    Element.layout [] <|
        row
            [ Background.color (rgb255 150 150 150)
            , width fill
            , height fill
            ]
            [ row
                [ centerX
                , centerY

                -- , Element.explain Debug.todo
                , Element.inFront <|
                    row
                        [ alignRight
                        , Element.alignBottom
                        , Element.moveDown (sHeight / 2)
                        , Element.moveLeft sPadding
                        , spacing sPadding
                        ]
                        [ el
                            [ Border.rounded 100
                            , Background.color green
                            , padding sPadding
                            ]
                            (text "Copy")
                        , el
                            [ Border.rounded 100
                            , Background.color green
                            , padding sPadding
                            ]
                            (text "Save")
                        ]
                ]
                [ el
                    [ Background.color white
                    , padding spacingN
                    , width (px 400)
                    , height fill
                    , Font.family [ Font.monospace ]

                    -- , width (fill |> Element.maximum 500)
                    , Border.roundEach
                        { topLeft = roundness
                        , topRight = 0
                        , bottomLeft = roundness
                        , bottomRight = 0
                        }
                    ]
                    (input model)
                , el
                    [ Background.color gray
                    , padding spacingN
                    , width (px 400)
                    , height fill
                    , Border.roundEach
                        { topLeft = 0
                        , topRight = roundness
                        , bottomLeft = 0
                        , bottomRight = roundness
                        }
                    ]
                    (Element.column
                        []
                        [ text model.text

                        -- Some padding because of overlayed button
                        , el [ height (Element.px sPadding) ] Element.none
                        ]
                    )
                ]
            ]


input model =
    Input.multiline
        [ Border.width 0

        --, height (fill |> Element.minimum 100)
        -- , width (fill |> Element.minimum 300)
        ]
        { onChange = \new -> Update { model | text = new }
        , text = model.text
        , placeholder = Nothing
        , label = Input.labelHidden "Label"
        , spellcheck = False
        }
