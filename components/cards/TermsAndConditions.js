import * as React from 'react';
import {Card, ListItem} from 'react-native-elements';
import {TERMS_TITLE, termsArray, termsTitleArray} from "../../constants/constant-list";
import styles from './styles';
import AcceptTermsButton from "../button/survey-question-buttons/accept-terms-button";

export default function TermsAndConditions() {

    return (
        <Card title={TERMS_TITLE} titleStyle={styles.title} containerStyle={styles.termsAndConditionsContainer}>
            {
                termsArray.map((item, i) => {
                    return (
                        <ListItem
                            key={'terms' + i}
                            title={termsTitleArray[i]}
                            titleStyle={styles.termsAndConditionsTitleText}
                            subtitle={item}
                            subtitleStyle={styles.termsAndConditionsSubtitleText}
                            style={styles.listText}
                            containerStyle={styles.termsAndConditionsItemContainer}
                        />
                    );
                })
            }
            <AcceptTermsButton/>
        </Card>
    )
};
