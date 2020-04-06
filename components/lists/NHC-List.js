import {View} from 'react-native';
import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import {isFetchingNHCListSelector} from '../../selectors/national-health-center/nhc-list-retrieval';
import {getUserLocationData} from "../../selectors/user/user-location-retrieval";
import Spinner from '../loading';
import {getNHCDetailsData, isFetchingNHCDetailsSelector} from "../../selectors/national-health-center/nhc-list-details";
import {fetchNHCListDetails} from "../../actions/national-health-center/nhc-list-details";
import NHCListItem from './NHC-List-Item';
import {setRegion} from "../../actions/summary-map/map-regions";

const NHCList = ({isFetching, data, userLocation, isFetchingDetails, getDataDetails, detailData, setRegion}) => {

    React.useEffect(() => {
        if (!isFetching && !isFetchingDetails && detailData.length === 0 && data !== undefined && data.length !== 0) {
            getDataDetails(data);
        }
    }, [data, detailData]);

    if (isFetching === true) {
        return (
            <Spinner/>
        )
    }

    function _formatAddress(address) {
        let result = address.split(",");
        return result[0]
    }


    // if (isFetchingDetails === false && detailData.length !== 0) {
    //     return (
    //         <View>
    //             {
    //                 detailData.map((item, i) => <NHCListItem key={i}
    //                                                          title={item.name}
    //                                                          address={_formatAddress(data[i].formatted_address)}
    //                                                          phoneNumber={item.formatted_phone_number}
    //                                                          website={item.url}/>)
    //             }
    //         </View>
    //     );
    // }
    //
    // // TODO: Update subtitle of both responses
    // return (
    //     <View>
    //         {
    //             data.map((item, i) => <NHCListItem key={i}
    //                                                      title={item.name}
    //                                                      address={_formatAddress(item.formatted_address)}/>)
    //         }
    //     </View>
    // );

    return (
        <View>
            {data.map((item, index) => <NHCListItem key={index}
                                                    title={item.name}
                // address={item.address}
                                                    address={item.city + ', ' + item.state}
                                                    phoneNumber={item.phone}
                                                    website={item.web}
                                                    onPress={() => setRegion(
                                                        {
                                                            latitude: item.y,
                                                            longitude: item.x,
                                                            latitudeDelta: 0.01,
                                                            longitudeDelta: 0.05,
                                                        })}
                                                    coordinates={{latitude: item.y, longitude: item.x}}
                // city={item.city}
            />)}
        </View>
    )

};


const mapStateToProps = state => ({
    isFetching: isFetchingNHCListSelector(state),
    userLocation: getUserLocationData(state),
    isFetchingDetails: isFetchingNHCDetailsSelector(state),
    detailData: getNHCDetailsData(state)
});

const mapDispatchToProps = dispatch => ({
    getDataDetails: data => dispatch(fetchNHCListDetails(data)),
    setRegion: latLong => dispatch(setRegion(latLong))
});

export default connect(mapStateToProps, mapDispatchToProps)(NHCList);