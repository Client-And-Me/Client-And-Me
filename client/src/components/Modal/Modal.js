import React from 'react';
import { Modal, Input } from 'react-materialize';

<Modal
    header='Modal Header'
    trigger={<Button>MODAL</Button>}>
    <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
    <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
</Modal>;