import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import {Button} from './Button'

export const themex=extendTheme({
    colors: {
        brand :{
            100:"#FF3c00",

        },  
      },
    fonts:{
        body:"Open Sans,san-serif",
    },
    styles:{
        global:() =>({
            body:{
                bg:"gray.300",
            }
        })
    },
    components:{

        Button,
    },

    

})
