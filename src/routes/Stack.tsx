import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {HomeSelect} from "../pages/homeSelect"
import {Subject} from "../pages/Subjects"
import { Content } from "../pages/Contents"
export function Stacks(){
    const stack = createStackNavigator()
    return(
        <stack.Navigator
        headerMode="none"
        >
            <stack.Screen name="Home" component={HomeSelect} />
            <stack.Screen name="Subjects" component={Subject} />
            <stack.Screen name="Contents" component={Content} />
        </stack.Navigator>
    )
}