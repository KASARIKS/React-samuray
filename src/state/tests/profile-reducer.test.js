import profileReducer, { addPostActionCreator, deletePostActionCreator, setPostTextActionCreator } from "../profile-reducer";

let initialStateTest = {
    post_text: '',
    postsData: [],
    post_id: 1,
}

it('checking setPost and addPost together', () => {
    // Test data
    let localInitialStateTest = initialStateTest
    // New state
    localInitialStateTest = profileReducer(localInitialStateTest, setPostTextActionCreator('Test posts'))
    localInitialStateTest = profileReducer(localInitialStateTest, addPostActionCreator())
    

    // Checking result
    expect(localInitialStateTest.postsData[0].text).toBe('Test posts')
})

it('post_text must be changed', () => {
    let localInitialStateTest = initialStateTest
    localInitialStateTest = profileReducer(localInitialStateTest, setPostTextActionCreator('Test post'))

    expect(localInitialStateTest.post_text).toBe('Test post')
})

it('new post must be added', () => {
    let localInitialStateTest = initialStateTest
    localInitialStateTest = profileReducer(localInitialStateTest, addPostActionCreator())
    expect(localInitialStateTest.postsData.length).toBe(1)
})

it('post_id must be changed', () => {
    // Test data
    let localInitialStateTest = initialStateTest
    
    // New state
    localInitialStateTest = profileReducer(localInitialStateTest, setPostTextActionCreator('Test posts'))
    localInitialStateTest = profileReducer(localInitialStateTest, addPostActionCreator())
    

    // Checking result
    expect(localInitialStateTest.post_id).toBe(2)
})

it('length must be decrement', () => {
    let localInitialStateTest = {
        post_text: '',
        postsData: [{id: 1, text: 'Test post', likes_count: 0}],
        post_id: 2,
    }
    localInitialStateTest = profileReducer(localInitialStateTest, deletePostActionCreator(1))
    expect(localInitialStateTest.postsData.length).toBe(0)
})