import { MaterialIcons } from '@expo/vector-icons';
// import { config } from '@gluestack-ui/config';
import { config } from './gluestack-ui.config';
import { styled } from "@gluestack-style/react";
import { Box, GluestackUIProvider, Text, Pressable, Button, ButtonText, Menu, MenuItem, MenuItemLabel } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import Logo from './assets/Icons/Logo';

const IconM = styled(MaterialIcons, {
  p: 3,
  fontSize: 30,
  color: '$secondary50',
})

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}

const MoreOptionsMenu = () => {
  return <Box alignSelf='flex-end' mr='$3'>
    <Menu
      trigger={triggerProps => {
        return <Pressable accessibilityLabel='More options menu' {...triggerProps}>
          <IconM name='more-vert' />
        </Pressable>;
      }}  >
      <MenuItem key="Community" textValue="Community">
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
    </Menu>
  </Box>
}

const Home = () => {
  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box position="absolute" $base-h={500} $base-w={500} $lg-h={700} $lg-w={700} >
          <Gradient />
        </Box>
        <Box height="60%" $base-my="$16" $base-mx="$5" $base-h="80%" $lg-my="$24" $lg-mx="$32" justifyContent="space-between" alignItems="center" >
          <Box bg="#64748B33" py="$2" px="$6" rounded="$full" alignItems="center" marginTop={20} $base-flexDirection="column" $sm-flexDirection="row" $md-alignSelf="flex-start" >
            <Text color="$white" fontWeight="$normal">
              gluestack issue check
            </Text>
            <MoreOptionsMenu />
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Logo />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
