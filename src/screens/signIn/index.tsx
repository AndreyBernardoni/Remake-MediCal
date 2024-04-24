import React from 'react';
import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  InputField,
  InputSlot,
  Text,
  VStack,
  HStack,
  ButtonText,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
  LinearGradient,
  LockIcon,
  MailIcon,
  ButtonGroup,
  ScrollView,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from '@gluestack-ui/themed';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';
import {SocialIcon} from 'react-native-elements';

import validateEmail from '../../utils/emailValidator';

export default function SignInScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isEmailInvalid, setIsEmailInvalid] = React.useState('');

  const handleState = () => {
    setShowPassword(showState => {
      return !showState;
    });
  };

  return (
    <ScrollView
      style={{flex: 1, position: 'relative'}}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <LinearGradient
        p="$16"
        colors={['$emerald400', '$emerald700']}
        borderRadius="$md"
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        as={RNLinearGradient}
        flex={1}>
        <Center flex={1}>
          <VStack space="2xl" w={'$full'}>
            <Center>
              <Heading color="$white" lineHeight="$md" mb={'$4'}>
                Login
              </Heading>
            </Center>
            <VStack space="xs">
              <FormControl isInvalid={isEmailInvalid}>
                <Text color="$white" lineHeight="$xs">
                  Email
                </Text>

                <Input
                  bg="$emerald500"
                  h={'$12'}
                  borderWidth={'$0'}
                  hardShadow="1"
                  $invalid-borderWidth={'$1'}>
                  <InputSlot pl="$3">
                    <InputIcon as={MailIcon} color="$white" />
                  </InputSlot>

                  <InputField
                    type="text"
                    placeholder="email@google.com"
                    placeholderTextColor={'$emerald100'}
                    color="$white"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    lineHeight={'$xs'}
                    onBlur={() => {
                      setIsEmailInvalid(!validateEmail(email));
                    }}
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Formato do email é inválido.
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </VStack>
            <VStack space="xs">
              <FormControl>
                <Text color="$white" lineHeight="$xs">
                  Password
                </Text>

                <Input
                  alignContent="center"
                  h={'$12'}
                  bg="$emerald500"
                  hardShadow="1"
                  borderWidth={'$0'}>
                  <InputSlot pl="$3">
                    <InputIcon as={LockIcon} color="$white" />
                  </InputSlot>

                  <InputField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    placeholderTextColor={'$emerald100'}
                    color="$white"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                  />
                  <InputSlot pr="$3" onPress={handleState}>
                    <InputIcon
                      as={showPassword ? EyeIcon : EyeOffIcon}
                      color="$white"
                    />
                  </InputSlot>
                </Input>
              </FormControl>
            </VStack>
          </VStack>
          <ButtonGroup flexDirection="column" space="xl" w="$full">
            <Button
              ml="auto"
              variant="link"
              onPress={() => {
                console.log('ESQUECI MINHA SENHA');
              }}>
              <ButtonText size="xs" color="$white">
                Esqueceu sua senha?
              </ButtonText>
            </Button>
            <Button
              hardShadow="1"
              size="xl"
              bg="$white"
              borderRadius={'$full'}
              onPress={() => {
                console.log('ESTOU FAZENDO LOGIN');
              }}>
              <ButtonText size="xs" color="$emerald800" fontWeight="$bold">
                ENTRAR
              </ButtonText>
            </Button>
            <Button
              variant="outline"
              size="xl"
              borderColor="$white"
              borderRadius={'$full'}
              onPress={() => {
                console.log('ESTOU ME CADASTRANDO');
              }}>
              <ButtonText size="xs" color="$white" fontWeight="$bold">
                CADASTRAR
              </ButtonText>
            </Button>
            <Text color="$white" lineHeight="$xs" alignSelf="center">
              - OU -
            </Text>
            <HStack space="lg" alignSelf="center">
              <SocialIcon
                type="facebook"
                light
                onPress={() => console.log('LOGIN COM FACEBOOK')}
              />
              <SocialIcon
                type="google"
                light
                onPress={() => console.log('LOGIN COM GOOGLE')}
              />
            </HStack>
          </ButtonGroup>
        </Center>
      </LinearGradient>
    </ScrollView>
  );
}
