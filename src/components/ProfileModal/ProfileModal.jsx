import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      size='55%'
      overlayBlur={3}
      opened = {modalOpened}
      onClose={()=>setModalOpened(false)}
    >
      <form action="" className="InfoForm">
          <h3>Your Info</h3>
          <div>
            <input type="text" className="InfoInput" name="firstName" placeholder="First Name"/>
            <input type="text" className="InfoInput" name="lastName" placeholder="Last Name"/>
          </div>
          <div>
            <input type="text" className="InfoInput" name="worksAt" placeholder="Works at: "/>
          </div>
          <div>
            <input type="text" className="InfoInput" name="liveIN" placeholder="Lives in: "/>
            <input type="text" className="InfoInput" name="country" placeholder="Country"/>
          </div>
          <div>
            <input type="text" className="InfoInput" name="relationshipStatus" placeholder="Relationship status: "/>
          </div>
          <div>
            Profile Image
            <input type="file" className="InfoInput" name="profileImage"/>
            Cover Image
            <input type="file" className="InfoInput" name="coverImage" />
          </div>
          <buttton className="button infoButton">Update</buttton>
      </form>
    </Modal>
  );
}

export default ProfileModal