import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FormSearch from '../../components/FormSearch';
import { useGetItunes } from '../../hooks';
import { ItuneData } from '../../interfaces';
import Skeleton from '../../components/Skeleton';
import Video from '../../components/Video';

export default function Result() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearch, setIsSearch] = useState(false);
  const [page, setPage] = useState(1);
  const search = searchParams.get('search');
  const { data, isLoading } = useGetItunes(search ?? '');

  const limitData = useMemo(() => {
    if (isLoading) {
      return []
    }
    return data?.slice(0, page * 10) ?? [];
  }, [data, isLoading, page]);

  const hasNoPage = page * 10 > (data?.length ?? 0);

  return (
    <>
      <div className='w-full'>
        {isSearch && (
          <div
            className='fixed z-20 h-screen w-full bg flex flex-col top-0'
            style={{
              backgroundColor: 'rgba(28, 28, 45, 0.9)',
            }}
          >
            <div className='flex w-full justify-end pt-5 pr-[18px]'>
              <button onClick={() => setIsSearch(false)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                >
                  <g
                    fill='none'
                    fill-rule='evenodd'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <g
                      stroke='#FFF'
                      stroke-width='2'
                    >
                      <g>
                        <path
                          d='M0 12L12 0M0 0l12 12'
                          transform='translate(-309.000000, -19.000000) translate(310.000000, 20.000000)'
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>

            <div className='flex-1 flex flex-col justify-center items-center'>
              <h2 className='text-xl font-bold mb-8 text-white'>Search</h2>
              <FormSearch
                buttonSubmitType='primary'
                onSubmit={(_search) => {
                  setSearchParams({ search: _search });
                  setIsSearch(false);
                }}
              />
            </div>
          </div>
        )}
        <nav
          className='h-[60px] w-full flex flex-row justify-between pt-[18px] px-4 fixed top-0 z-10'
          style={{
            boxShadow: '0 0 6px 0 rgba(148, 77, 230, 0.75)',
            backgroundImage: 'linear-gradient(100deg, #712bda, #a45deb 100%)',
            borderBottomRightRadius: '38%',
            borderBottomLeftRadius: '38%',
            borderBottomWidth: '30px',
            borderBottomColor: 'transparent',
          }}
        >
          <div className='m-0 p-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='13'
              viewBox='0 0 16 13'
            >
              <g
                fill='none'
                fillRule='evenodd'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <g
                  stroke='#FFF'
                  strokeWidth='2'
                >
                  <g>
                    <path
                      d='M0 .438h14M0 5.688h14m-14 5.25h14'
                      transform='translate(-14.000000, -18.000000) translate(15.000000, 19.000000)'
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='73'
            height='16'
            viewBox='0 0 73 16'
          >
            <g
              fill='none'
              fill-rule='evenodd'
            >
              <g
                fill='#FFF'
                fill-rule='nonzero'
              >
                <path
                  d='M140.57 34.6c.522 0 .936-.432.936-.954v-4.302c0-2.034-1.674-3.744-3.762-3.744-.702 0-1.368.216-1.908.558-.162-.342-.504-.558-.882-.558-.54 0-.954.432-.954.954v7.092c0 .522.414.954.954.954.468 0 .864-.342.954-.774.036-.072.036-.126.036-.18v-4.302c0-1.008.792-1.818 1.8-1.818 1.026 0 1.872.81 1.872 1.818v4.302c0 .522.45.954.954.954zm8.19 3.222c2.394 0 4.32-1.962 4.32-4.32v-6.948c0-.522-.414-.954-.954-.954-.468 0-.864.324-.954.756-.648-.468-1.476-.756-2.412-.756-1.188 0-2.286.522-3.06 1.332-.774.846-1.26 1.962-1.26 3.204 0 1.26.486 2.376 1.26 3.168.774.846 1.872 1.368 3.06 1.368.882 0 1.71-.27 2.358-.72-.234 1.098-1.188 1.926-2.358 1.926-.378 0-.72-.09-1.026-.252-.504-.216-1.062-.036-1.296.45-.252.486-.036 1.08.432 1.296.558.288 1.224.45 1.89.45zm0-5.094c-.63 0-1.224-.252-1.656-.738-.432-.414-.72-1.098-.72-1.854 0-.72.288-1.404.72-1.836.432-.504 1.026-.774 1.656-.774.684 0 1.242.27 1.71.774.396.432.684 1.116.684 1.836 0 .756-.288 1.44-.684 1.854-.468.486-1.026.738-1.71.738zM169.1 34.6c.522 0 .954-.432.954-.954V29.38c0-2.088-1.674-3.78-3.744-3.78-1.134 0-2.16.468-2.826 1.242-.684-.774-1.692-1.242-2.826-1.242-.684 0-1.35.198-1.926.54-.144-.342-.486-.54-.864-.54-.522 0-.954.414-.954.972v7.074c0 .468.342.828.774.936.054 0 .108.018.18.018.378 0 .738-.252.9-.576v-.09c.036-.036.036-.072.054-.108v-.054c0-.036.018-.09.018-.126V29.38c0-1.026.828-1.854 1.818-1.854 1.008 0 1.836.81 1.854 1.8v4.32c0 .485.404.892.865.948l.107.006c.522 0 .954-.432.954-.954v-4.32c.036-.99.846-1.8 1.872-1.8.99 0 1.818.828 1.818 1.854v4.266c0 .522.45.954.972.954zm8.496 0c2.07 0 3.798-1.692 3.798-3.744v-4.302c0-.504-.468-.954-.972-.954-.54 0-.936.45-.936.954v4.302c-.018 1.026-.846 1.836-1.89 1.836-1.026 0-1.836-.81-1.836-1.836v-4.302c0-.504-.414-.954-.954-.954-.522 0-.954.45-.954.954v4.302c0 2.052 1.692 3.744 3.744 3.744zm10.368 0c.882 0 1.692-.27 2.34-.72.648-.468 1.134-1.206 1.134-2.088 0-.414-.126-.828-.342-1.188-.306-.504-.792-.846-1.278-1.062-.522-.252-1.08-.414-1.674-.522h-.018l-.018-.018c-.612-.108-1.08-.27-1.314-.432-.126-.072-.18-.144-.198-.18-.036-.054-.036-.072-.036-.144 0-.09.054-.252.288-.414.234-.18.63-.324 1.08-.324.576 0 1.08.288 1.656.666.45.306 1.044.18 1.332-.252.25-.415.161-.953-.194-1.26l-.094-.072c-.576-.396-1.458-.99-2.7-.99-.828 0-1.584.234-2.214.666-.594.45-1.062 1.152-1.062 1.98 0 .414.108.81.306 1.134.324.486.756.81 1.242 1.044.468.216 1.008.36 1.566.468h.018c.648.126 1.188.324 1.44.504.144.09.216.162.234.216.036.054.054.09.054.18 0 .144-.072.324-.324.54-.288.18-.738.342-1.224.342-.702.018-1.512-.396-1.98-.792-.396-.342-1.026-.288-1.35.144-.324.396-.27 1.008.126 1.332.72.576 1.8 1.224 3.204 1.242zm6.948-10.26c.558 0 .972-.45.972-.99v-.378c0-.54-.414-.972-.972-.972-.54 0-.972.432-.972.972v.378c0 .54.432.99.972.99zm0 10.26c.558 0 .972-.432.972-.972v-7.02c0-.576-.414-.99-.972-.99-.54 0-.972.414-.972.99v7.02c0 .54.432.972.972.972zm8.01 0c1.08 0 2.088-.396 2.862-.954.414-.36.486-.936.198-1.332-.36-.432-.954-.504-1.35-.198-.468.342-1.062.576-1.71.576-1.458 0-2.664-1.188-2.664-2.574s1.206-2.592 2.664-2.592c.666 0 1.242.234 1.71.576.414.324.99.252 1.35-.18.288-.396.216-1.008-.198-1.332-.774-.594-1.782-.99-2.862-.99-2.484.018-4.572 2.016-4.572 4.518 0 2.466 2.088 4.482 4.572 4.482z'
                  transform='translate(-134.000000, -22.000000)'
                />
              </g>
            </g>
          </svg>

          <button
            className='h-full flex'
            onClick={() => setIsSearch(true)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
            >
              <g
                fill='none'
                fillRule='evenodd'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <g
                  stroke='#FFF'
                  strokeWidth='2'
                >
                  <g>
                    <path
                      d='M14 14L9.333 9.333m1.556-3.889c0 3.007-2.438 5.445-5.445 5.445C2.438 10.889 0 8.45 0 5.444 0 2.438 2.438 0 5.444 0c3.007 0 5.445 2.438 5.445 5.444z'
                      transform='translate(-310.000000, -17.000000) translate(311.000000, 18.000000)'
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </nav>
        <div className='mb-[110px]'></div>
        {search ? (
          <section>
            <div className='mt-[42px] flex flex-row justify-center items-center'>
              <span className='text-sm text-slate-700 mr-[14px]'>Search result for :</span>
              <h2 className='text-lg font-bold text-violet-600'>{search}</h2>
            </div>

            <div className='mt-[38px] flex flex-col px-4 gap-5'>
              {isLoading && (
                <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
              )}
              {limitData.map((item: ItuneData) => (
                <div
                  key={item.collectionId}
                  className='w-full bg-white rounder-[10px] px-2.5 py-3 min-h-[124px] flex flex-row rounded-[10px]'
                  style={{
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div>
                    <Video
                      urlImage={item.artworkUrl100}
                      urlVideo={item.previewUrl}
                    />
                  </div>
                  <div className='flex flex-col flex-1 pt-1 pl-3 pr-0.5 justify-between'>
                    <div className='flex-1 h-full'>
                      <h4 className='text-[10px] leading-3 text-slate-700 font-medium'>{item.artistName}</h4>
                      <h3 className='mt-1 mb-3 text-sm font-bold text-slate-700'>{item.collectionCensoredName}</h3>
                    </div>

                    <div className='flex flex-row justify-between'>
                      <span className='rounded-[12px] bg-emerald-500 px-3.5 py-1 text-[10px] text-white'>
                        {item.primaryGenreName}
                      </span>

                      <div className='flex flex-row items-center'>
                        <span className='mr-1.5'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                          >
                            <g
                              fill='none'
                              fill-rule='evenodd'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            >
                              <g
                                stroke='#F5B014'
                                stroke-width='2'
                              >
                                <g>
                                  <g>
                                    <path
                                      d='M8 4.444c-1.473 0-2.667.796-2.667 1.778S6.527 8 8 8c1.473 0 2.667.796 2.667 1.778S9.473 11.556 8 11.556m0-7.112c.987 0 1.849.358 2.31.89M8 4.443v-.888m0 .888v7.112m0 0v.888m0-.888c-.987 0-1.849-.358-2.31-.89M16 8c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z'
                                      transform='translate(-271.000000, -249.000000) translate(15.000000, 156.000000) translate(257.000000, 94.000000)'
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <p className='text-sm font-bold text-yellow-500'>{item.trackPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!hasNoPage && (
              <div className='mt-5 flex justify-center'>
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className='bg-slate-200 hover:bg-slate-300 rounded-[18px] w-auto text-sm py-2.5 px-[30px] text-slate-500 font-medium'
                >
                  Load More
                </button>
              </div>
            )}
          </section>
        ) : (
          <section>
            <p className='text-center p-4'>Please, click button search to find your music</p>
          </section>
        )}

        <div className='mb-10'></div>
      </div>
    </>
  );
}

