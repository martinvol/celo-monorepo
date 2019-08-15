import colors from '@celo/react-components/styles/colors'
import fontStyles from '@celo/react-components/styles/fonts'
import * as React from 'react'
import { WithNamespaces, withNamespaces } from 'react-i18next'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Namespaces } from 'src/i18n'
import { headerWithBackButton } from 'src/navigator/Headers'

interface OwnProps {
  data: string
}

type Props = OwnProps & WithNamespaces

class DappKitSignTxScreen extends React.Component<Props> {
  static navigationOptions = headerWithBackButton

  render() {
    const { t, data } = this.props
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.header}>{t('data')}</Text>
          <Text style={styles.bodyText}>{data}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.background,
    marginHorizontal: '5%',
  },
  header: {
    ...fontStyles.h1,
    textAlign: 'center',
    paddingBottom: 15,
  },
  bodyText: {
    ...fontStyles.paragraph,
    fontSize: 15,
    color: colors.darkSecondary,
  },
})

export default withNamespaces(Namespaces.dappkit)(DappKitSignTxScreen)
