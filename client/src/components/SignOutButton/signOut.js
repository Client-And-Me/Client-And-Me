import React from 'react';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignOutButton = () =>

    <a href={routes.HOME} onClick={auth.doSignOut}>Log Out</a>


export default SignOutButton;