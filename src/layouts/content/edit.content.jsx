import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { FormContainer, Inputs, TextAreas } from '../../components/form.comp';
import { Buttons, IButtons } from '../../components/button.comp';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import { EventContext } from '../../context/event.context';
import { FiPen, FiEye } from 'react-icons/fi';
import { useContext } from 'react';

const EditTask = () => {
	const { setTabs, handleEvent, defaultValue, titleRef, notesRef } = useContext(EventContext);
	return (
		<VStack w={'full'} gap={3}>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'} textTransform={'uppercase'}>edit task</Heading>
					<IButtons
						custom={{
							_active: { bg: 'lightBlueAlpha.200' },
							_hover: { bg: 'lightBlueAlpha.200' },
							onClick: () => setTabs(1),
							color: 'lightBlue.200',
							icon: <FiEye/>
						}}
					/>
				</HStack>
			</WidgetHeader>
			<WidgetBody>
				<FormContainer>
					<Inputs value={`${defaultValue.title}`} onChange={(e) => handleEvent('title', e)} pHolder={'new title'} />
					<TextAreas value={`${defaultValue.notes}`} onChange={(e) => handleEvent('notes', e)} pHolder={'new notes'}  />
				</FormContainer>
			</WidgetBody>
			<WidgetFooter>
				<HStack justifyContent={'center'}>
					<Buttons
						custom={{
							onClick: () => handleEvent('update'),
							bg: 'indigo.200',
							color: 'white',
							rounded: 'md',
							px: 9,
							py: 4
						}}
					>update</Buttons>
				</HStack>
			</WidgetFooter>
		</VStack>
	);
};

export default EditTask;