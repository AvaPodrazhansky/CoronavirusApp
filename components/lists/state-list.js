import {ListItem} from 'react-native-elements';
import {View} from 'react-native';
import React from "react";
import connect from "react-redux/lib/connect/connect";
import {getCurrentCasesByStateData} from "../../selectors/dashboard/current-cases-by-state";
import {fetchCurrentDataByState} from "../../actions/dashboard/current-cases-by-state";

const StateList = ({data, getData}) => {
    React.useEffect(() => {
        if(data.length === 0) getData();
    }, []);

    return (
        <View>
            {
                data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.state}
                        // leftIcon={{ name: item.icon }}
                        topDivider
                        bottomDivider
                        chevron
                    />
                ))
            }
        </View>
    );
};
const mapStateToProps = state => ({
    data: getCurrentCasesByStateData(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataByState())
});

export default connect(mapStateToProps, mapDispatchToProps)(StateList);