import type { FC } from 'react'

import type { AppProps } from './App.types'

import { fetcher } from 'serenity-shared'
import { SWRConfig } from 'swr'

import { Bookmarks } from '@/widgets/Bookmarks/Bookmarks'
import { QuotesWidget } from '@/widgets/QuotesWidget/QuotesWidget'
import { TaskList } from '@/widgets/TaskList/TaskList'

import { BookmarkWidgetToggle } from '../BookmarkWidgetToggle/BookmarkWidgetToggle'
import { BottomTab } from '../BottomTab/BottomTab'
import { Clock } from '../Clock/Clock'
import { ErrorBoundaryWrapper } from '../ErrorBoundaryWrapper/ErrorBoundaryWrapper'
import { SideMenu } from '../SideMenu/SideMenu'
import { SideMenuToggle } from '../SideMenuToggle/SideMenuToggle'
import { SourceCredit } from '../SourceCredit/SourceCredit'
import { TasksWidgetToggle } from '../TaskWidgetToggle/TaskWidgetToggle'
import { UnsplashBackground } from '../UnsplashBackground/UnsplashBackground'
import { UnsplashCreditWidget } from '../UnsplashCreditWidget/UnsplashCreditWidget'
import { Weather } from '../Weather/Weather'
import { WidgetContainer } from '../WidgetContainer/WidgetContainer'

export const App: FC<AppProps> = () => (
    <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
        <ErrorBoundaryWrapper handle='Main'>
            <UnsplashBackground />
            <SideMenu />
            <div className='h-full min-h-screen w-full min-w-screen'>
                <div className='box-shadow-nav fixed top-0 right-0 left-0 flex items-center justify-between bg-black/15 shadow-lg hover:bg-black/35'>
                    <div className='ml-3 basis-1/3 text-left hover:font-bold'>
                        <TasksWidgetToggle />
                    </div>

                    <div className='flex basis-1/3 flex-nowrap justify-center font-bold'>
                        <div>
                            <Clock />
                        </div>
                        <div>&nbsp;/&nbsp;</div>
                        <div>
                            <Weather />
                        </div>
                    </div>

                    <div className='mr-3 basis-1/3 text-right hover:font-bold'>
                        <BookmarkWidgetToggle />
                    </div>
                </div>

                <div className=''>
                    <WidgetContainer className='left-0 rounded-r-lg' widget='TaskWidget'>
                        <TaskList />
                    </WidgetContainer>

                    <WidgetContainer className='right-0 rounded-l-lg' widget='BookmarksWidget'>
                        <Bookmarks />
                    </WidgetContainer>
                </div>

                <div className='fixed right-0 bottom-0 left-0 flex min-h-24 w-full flex-row'>
                    <BottomTab className='ml-6 flex-none'>
                        <SideMenuToggle />
                    </BottomTab>

                    <BottomTab className='flex-none'>
                        <SourceCredit />
                    </BottomTab>

                    <BottomTab className='shrink grow'>
                        <QuotesWidget />
                    </BottomTab>

                    <BottomTab className='flex-none'>
                        <UnsplashCreditWidget />
                    </BottomTab>
                </div>
            </div>
        </ErrorBoundaryWrapper>
    </SWRConfig>
)

export default App
