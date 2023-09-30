import getCurrentUser from "../actions/getCurrentUser";
import getFavoruteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const FavoritePage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoruteListings();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritePage;
