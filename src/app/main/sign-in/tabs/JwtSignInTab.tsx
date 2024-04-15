/* eslint-disable prettier/prettier */
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'
import { Link } from 'react-router-dom'
import JwtSignInForm from '../../../auth/services/jwt/components/JwtSignInForm'

function jwtSignInTab() {
  return (
    <div className="w-full">
      <JwtSignInForm />

      <div className="mt-6 flex items-baseline font-medium">
        <Typography>Don't have an account?</Typography>
        <Link className="ml-4" to="../../sign-up">
          Sign up
        </Link>
      </div>
      <div className="mt-32 flex items-center">
        <div className="mt-px flex-auto border-t" />
        <Typography className="mx-8" color="text.secondary">
          Or continue with
        </Typography>
        <div className="mt-px flex-auto border-t" />
      </div>

      <div className="mt-32 flex items-center space-x-16">
        <Button variant="outlined" className="flex-auto">
          <FuseSvgIcon size={20} color="action">
            feather:facebook
          </FuseSvgIcon>
        </Button>
        <Button variant="outlined" className="flex-auto">
          <FuseSvgIcon size={20} color="action">
            feather:twitter
          </FuseSvgIcon>
        </Button>
        <Button variant="outlined" className="flex-auto">
          <FuseSvgIcon size={20} color="action">
            feather:github
          </FuseSvgIcon>
        </Button>
      </div>
    </div>
  )
}

export default jwtSignInTab
