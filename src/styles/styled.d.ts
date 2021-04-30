import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors:  {
            primary: string;
            secondary: string;

            headerBackground: string;
            headerButtonLight: string;
            headerButtonDark: string;

        
            playerBackground: string;
            playerColor: string;
            
            emptyPlayerBorder: string;
            emptyPlayerBackgroundPrimary:  string;
            emptyPlayerBackgroundSecondary:  string;
            
            sliderBackground: string;

            playButtonBackground: string;


            pageBackground: string;
            pageColor: string;

            titleColor: string;
            listItemBackground: string;
            defaultBorder: string;
            linkColor: string;
            spanColor: string;
            tableHeadColor: string;
            buttonBackground: string;


            episodeButtonThumbBackground: string;
            episodeDescriptionColor: string;
        }
    }
}