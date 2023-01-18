//import usepage
import {usePage} from '@inertiajs/inertia-react';
export default function hasAnyPermissions(permissions){

    //destruct auth from props
    const {auth} = usepage().this.props

    //get permissions from props
    let allpermissions = auth.permissions;

    let hasPermission = false;

    permission.forEach(function(item){
        if(allpermissions[item]) hasPermission = true;
    });
return hasPermission;
}
