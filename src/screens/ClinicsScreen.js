/**
 * @file File with the Clinics Screen component.
 * @author Jay Bhatt
 */

import ClinicsMap from "../components/map/ClinicsMap";
import { useDispatch, useSelector } from "react-redux";
import { Button, View, Text } from "react-native";
import { increment, decrement, reset, set } from "../slices/clinicsSlice";

/**
 * The Clinics Screen component.
 *
 * @returns {JSX.Element} A component that represents the Clinics Screen.
 * @constructor
 */
const ClinicsScreen = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.clinics.value);

    return (
        <View>
            <ClinicsMap />
            {/*<Text>Counter Value: {counterValue}</Text>*/}
            {/*<Button title="Increment" onPress={() => dispatch(increment())} />*/}
            {/*<Button title="Decrement" onPress={() => dispatch(decrement())} />*/}
            {/*<Button title="Reset" onPress={() => dispatch(reset())} />*/}
            {/*<Button title="Set to 10" onPress={() => dispatch(set(10))} />*/}
        </View>
    );
};

export default ClinicsScreen;
