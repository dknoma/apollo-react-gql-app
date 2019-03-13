import React from 'react'
import Loadable from 'react-loadable'

import Loading from '../../components/loading'

const LoadableComponent = Loadable({
  loader: () => import('./profile'),
  loading: Loading,
})

const LoadableProfile = () => <LoadableComponent />

export default LoadableProfile