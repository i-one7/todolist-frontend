import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { FormContainer, Inputs, TextAreas } from '../../components/form.comp';
import { Buttons, IButtons } from '../../components/button.comp';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import { EventContext } from '../../context/event.context';
import { FiLayers } from 'react-icons/fi';
import { useContext } from 'react';

const Createlist = () => {
	const { setTabs, handleEvent, titleRef, notesRef } = useContext(EventContext);
	return (
		<VStack w={'full'} gap={3}>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'} textTransform={'uppercase'}>create task</Heading>
					<IButtons
						custom={{
							_active: {bg: 'indigoAlpha.200'},
							_hover: {bg: 'indigoAlpha.200'},
							onClick: () => setTabs(2),
							color: 'indigo.200',
							icon: <FiLayers/>
						}}
					/>
				</HStack>
			</WidgetHeader>
			<WidgetBody>
				<FormContainer>
					<Inputs refs={titleRef} pHolder={'title'} />
					<TextAreas refs={notesRef} pHolder={'notes'}  />
				</FormContainer>
			</WidgetBody>
			<WidgetFooter>
				<HStack justifyContent={'center'}>
					<Buttons
						custom={{
							onClick: () => handleEvent('create'),
							bg: 'indigo.200',
							color: 'white',
							rounded: 'md',
							px: 9,
							py: 4
						}}
					>create</Buttons>
				</HStack>
			</WidgetFooter>
		</VStack>
	);
};

export default Createlist;