import { GitHubUser } from '@/lib/types';
import {
  Users,
  MapPin,
  Link2,
  Twitter,
  Building2,
  Mail,
} from 'lucide-react';

interface UserProfileProps {
  user: GitHubUser;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="w-full max-w-2xl bg-zinc-950 p-6 rounded-lg shadow-lg text-[#CDD5E0]">
      <div className="flex items-start gap-6">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-24 h-24 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">{user.name || user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A5567] hover:underline"
              >
                @{user.login}
              </a>
            </div>
            <span className="text-[#4A5567]">
              Joined {new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
          {user.bio && (
            <p className="mt-4 text-[#CDD5E0]">{user.bio}</p>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-[#3662E] rounded-lg p-4">
        <div>
          <h3 className="text-sm ">Repos</h3>
          <p className="font-bold">{user.public_repos}</p>
        </div>
        <div>
          <h3 className="text-sm ">Followers</h3>
          <p className="font-bold">{user.followers}</p>
        </div>
        <div>
          <h3 className="text-sm ">Following</h3>
          <p className="font-bold">{user.following}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="text-[#3662E3]" size={18} />
          <span>{user.location || 'Not available'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Twitter className="text-[#3662E3]" size={18} />
          <span>{user.twitter_username || 'Not available'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Link2 className="text-[#3662E3]" size={18} />
          <a
            href={user.blog || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={user.blog ? 'hover:underline text-[#3662E3]' : ''}
          >
            {user.blog || 'Not available'}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="text-[#3662E3]" size={18} />
          <span>{user.company || 'Not available'}</span>
        </div>
      </div>
    </div>
  );
}