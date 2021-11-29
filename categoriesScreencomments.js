
// CategoriesScreen.navigationOptions = { //Its just a js object we are adding some properties to it. Used here for adding titles. But the properties below are React Navigation related
//     headerTitle: "Meal Categories", I added in Navigator itself by default i have the heading but i have changed
// }
/**<View style={styles.screen}>
 * console.log(props) //it has a naviation prop as well with other functions
            <Text>The Categories Screen!</Text>
            <Button title="Go to Meals" onPress={() => {
                props.navigation.navigate({routeName : 'CategoryMeals'}) //.navigate('CategoryMeals') this also works
            }} />
            
            <Button title="GO BACK" onPress={() => {
                //we will use this in scenarios when user enters info and press save then this page exits
                props.navigation.goBack() 
                // props.navigation.pop() //like an array 
            }} />
            {/* <Button title="Go to Meals" onPress={() => {
                props.navigation.replace('CategoryMeals') //This will replace the currentscreen by using this now you dont have back button bc it clears the stack it is useful when user logged in and we wont show login screen again by pressing back button
            }} /> 
            </View> */
