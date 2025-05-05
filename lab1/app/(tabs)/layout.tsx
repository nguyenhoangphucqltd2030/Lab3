import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="project1" options={{ title: 'Project 1' }} />
      <Tabs.Screen name="project2" options={{ title: 'Project 2' }} />
      <Tabs.Screen name="project3" options={{ title: 'Project 3' }} />
      <Tabs.Screen name="project4" options={{ title: 'Project 4' }} />
      <Tabs.Screen name="project5" options={{ title: 'Project 5' }} />
      <Tabs.Screen name="project6" options={{ title: 'Project 6' }} />
      <Tabs.Screen name="project7" options={{ title: 'Project 7' }} />
      <Tabs.Screen name="project8" options={{ title: 'Project 8' }} />
      <Tabs.Screen name="project9" options={{ title: 'Project 9' }} />
      <Tabs.Screen name="project10" options={{ title: 'Project 10' }} />
      <Tabs.Screen name="project3plus" options={{ title: 'Project 3 plus' }} />
    </Tabs>
  );
}
