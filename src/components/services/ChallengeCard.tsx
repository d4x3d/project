import { Trophy, Users } from 'lucide-react';
import type { LifestyleService } from '../../types';

interface ChallengeCardProps {
  challenge: NonNullable<LifestyleService['currentChallenge']>;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const daysLeft = Math.ceil(
    (new Date(challenge.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-brand-blue-50 rounded-lg p-6 border border-brand-blue-100">
      <div className="flex items-center mb-4">
        <Trophy className="h-6 w-6 text-brand-blue-600 mr-2" />
        <h4 className="text-lg font-semibold text-gray-900">{challenge.title}</h4>
      </div>
      <p className="text-gray-600 mb-4">{challenge.description}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-brand-blue-600 font-medium">{daysLeft} days left</span>
        <div className="flex items-center text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span>{challenge.participants} participants</span>
        </div>
      </div>
    </div>
  );
}